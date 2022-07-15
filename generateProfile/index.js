import fetch from 'node-fetch';
import fs from 'fs';

const JSON_URL = "https://ktane.timwi.de/json/raw";
const PROFILE_PATH = "../JaProfiles";

const ignore = ["Jailbreak", "boneAppleTea", "boggle", "BrokenBinary", "SouvenirModule", "eeBgnilleps", "insanagrams"];


(async () => {
  const data = await fetch(JSON_URL);
  const json = await data.json();
  const names = {};
  const result = {
    DisabledList: json.KtaneModules
      .filter(mod => (mod.Sheets && mod.Sheets.every(sheet => !sheet.includes('日本語'))) || ignore.includes(mod.ModuleID))
      .map(mod => mod.ModuleID),
    EnabledList: json.KtaneModules
      .filter(mod => mod.Sheets && 
        mod.Sheets.some(sheet => sheet.includes('日本語') && 
          mod.Origin !== "Vanilla" && 
          ["Regular", "Needy"].includes(mod.Type)
        ) && !ignore.includes(mod.ModuleID))
      .map(mod => {
        try {
          names[mod.ModuleID] = [mod.Name, mod.Sheets.find(sheet => sheet.includes('日本語')).match(/\(日本語 — ([^)]+)\)/)[1], mod.SteamID]
          return mod.ModuleID
        } catch {
          console.log(mod.Sheets.find(sheet => sheet.includes('日本語')))
        }
      }),
    Operation: 0
  };

  const lastVersion = Math.max(...(await fs.promises.readdir(PROFILE_PATH))
    .map(filename => filename.match(/Ja manual v1\.(\d+)\.json/))
    .filter(match => match && match.length === 2)
    .map(match => match[1]));


  const lastProfile = JSON.parse(await fs.promises.readFile(`${PROFILE_PATH}/Ja manual v1.${lastVersion}.json`));

  const changed = result.EnabledList
    .filter(mod => !lastProfile.EnabledList.includes(mod));
  
  const changelog = `${changed.map(mod => `${names[mod][1]}(${names[mod][0]})`).join("、")}追加`
    
  if(changed.length === 0) {
    console.log("No change detected");
  } else {
    console.log(`Added ${changed.length} modules`);
    const date = new Date();
    const datestr = `${date.getFullYear()% 100}.${("0" + (new Date().getMonth()+1)).substr(-2,2)}.${("0" + new Date().getDate()).substr(-2,2)}`
    console.log(`* <a href="./Ja manual v1.${lastVersion + 1}.json" download>v1.${lastVersion + 1}</a> \\[最終更新: ${datestr}\\]`)
    console.log(`|${datestr}|<a href="./Ja manual v1.${lastVersion + 1}.json" download>v1.${lastVersion + 1}</a>|{% include_relative changelog1.${lastVersion + 1}.txt %}|`);
    changed.forEach(c => console.log(`https://steamcommunity.com/sharedfiles/filedetails/?id=${names[c][2]}`));
    await fs.promises.writeFile(`${PROFILE_PATH}//changelog1.${lastVersion+1}.txt`, changelog);
    await fs.promises.writeFile(`${PROFILE_PATH}//Ja manual v1.${lastVersion+1}.json`, JSON.stringify(result, null, 2));
  }

})()