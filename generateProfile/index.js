import fetch from 'node-fetch';
import fs from 'fs';

const JSON_URL = "https://ktane.timwi.de/json/raw";
const PROFILE_PATH = "../JaProfiles";


(async () => {
  const data = await fetch(JSON_URL);
  const json = await data.json();
  const result = {
    DisabledList: json.KtaneModules
      .filter(mod => mod.Sheets && mod.Sheets.every(sheet => !sheet.includes('日本語')))
      .map(mod => mod.ModuleID),
    EnabledList: json.KtaneModules
      .filter(mod => mod.Sheets && 
        mod.Sheets.some(sheet => sheet.includes('日本語') && 
          mod.Origin !== "Vanilla" && 
          ["Regular", "Needy"].includes(mod.Type)
        ))
      .map(mod => mod.ModuleID),
    Operation: 0
  };

  const re = /Ja manual v1\.(\d+)/

  const lastVersion = Math.max(...(await fs.promises.readdir(PROFILE_PATH))
    .map(filename => filename.match(/Ja manual v1\.(\d+)\.json/))
    .filter(match => match && match.length === 2)
    .map(match => match[1]));


  const lastProfile = JSON.parse(await fs.promises.readFile(`${PROFILE_PATH}/Ja manual v1.${lastVersion}.json`));

  const changed = result.EnabledList
    .filter(mod => !lastProfile.EnabledList.includes(mod));
  
    
  if(changed.length === 0) {
    console.log("No change detected");
  } else {
    changed.forEach(mod => console.log(`Enabled: ${mod}`));
    await fs.promises.writeFile(`${PROFILE_PATH}//Ja manual v1.${lastVersion+1}.json`, JSON.stringify(result, null, 2))
  }

})()