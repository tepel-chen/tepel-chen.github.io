---
layout: default
title: 日本語対応モジュールプロファイル
description: 日本語対応モジュールのプロファイルを提供しています。プロファイルの使い方についても記載しております。
lang: ja_JP
---
# 日本語対応モジュールプロファイル

## 最新版

* <a href="./Ja manual v1.15.json" download>v1.15</a>\[最終更新: 21.09.24\]
* <a href="./wordless v1.0.json" download>Wordless v1.0</a>

Wordlessは日本語訳は存在しないものの、英語の含まれていないマニュアルが存在するものを有効化します。(具体例: [❖](https://ktane.timwi.de/HTML/%E2%9D%96.html))

どちらのプロファイルも**分析担当者用**のプロファイルです。必要に応じて処理担当者用に変更してください。


## プロファイルについて

* [Mod Selector MOD](https://steamcommunity.com/sharedfiles/filedetails/?id=801400247)を利用すると使える、出現モジュールを制限するためのシステムです。
* 一部のMODには複数のモジュールが含まれています。そのうちの一部のみをプレイしたい場合に使うことができます。
* また、初めて一緒にプレイするときにも、分析担当者がプレイできるモジュールのみでプレイするためにも利用できます。
* プロファイルの作成・変更は、Mod Selector MODのタブレット内の「Profiles→Create New Profiles」と「Profiles→Edit Profiles」から行うか、[Profile Editor](https://ktane.timwi.de/More/Profile%20Editor.html)から行う(推奨)ことができます。
* 設定方法
  * [Mod Selector MOD](https://steamcommunity.com/sharedfiles/filedetails/?id=801400247)をインストールしてください。
  * タブレットから「Profiles→Open Mod Profile Folder」を開いてください。プロファイルを置くべきフォルダが開きます。
  * 上記のプロファイル、あるいは送ってもらったプロファイルをフォルダに入れてください。
  * タブレットから「Profiles→Set Active Profiles」を選択して、送ってもらったプロファイルを設定してください。
* プロファイルの種類について
  * 処理担当者用(Defuser) - 無効化したモジュールは必ず出現しません。分析担当者用プロファイルが設定されていない場合、すべての処理担当者用プロファイルで有効化されているモジュールのみ出現します。
  * 分析担当者用(Expert) - 有効化したモジュールが出現するようになります。処理担当者用プロファイルで無効化されている場合は出現しません。
  * モジュールが出現する条件: すべての処理担当者用プロファイルで無効化されていない、かつ、いずれかの処理担当者用プロファイルで有効化されている(あるいは処理担当者用プロファイルが存在しない)
* その他プロファイルの使い道
  * 分析担当者用プロファイルは、サービスやゲームルームなどのMODも無効化することができます。気分によって違う部屋で固定でプレイしたい場合に便利です。
  * [マニュアルレポジトリ](https://ktane.timwi.de/?lang=ja)の「フィルタ→プロファイルでフィルタする」からレポジトリの検索結果をフィルタすることができます。
  * [Dynamic Mission Generator](https://steamcommunity.com/sharedfiles/filedetails/?id=1633427044)の生成文字列で、`profile:[name]`を利用することで、プロファイルで有効化されているモジュールからランダムにモジュールを出現させることができます。
  * [Profile Revealer](https://steamcommunity.com/sharedfiles/filedetails/?id=2007817583)から、現在の選択しているモジュールがどのプロファイルによって有効化しているかを確認することができます。どの分析担当者にモジュールを割り振るかを決めるのに便利です。

## 変更ログ

* \[21.09.28\] <a href="./Ja manual v1.15.json" download>v1.15</a> - 16コイン(16 coins)、81、9-Ball(9ボール)、アメイジングボタン(A-maze-ing Buttons)、蓄積(Accumulation)、加算(Addition)、アドベンチャーゲーム(Adventure Game)、錬金術(Alchemy)、エイリアンファイリングの色(Alien Filing Colors)、アルファベット番号(Alphabet Numbers)、アルファベットルール(Alphabetical Ruling)、アモングス(amougus)、アロートーク(Arrow Talk)追加(ひむさん)
* \[21.09.24\] <a href="./Ja manual v1.14.1.json" download>v1.14.1</a> - 蝶番(Hinges)は現在バグ(爆弾の裏側から誤って選択される場合がある)があるため修正が入るまで無効化
* \[21.09.24\] <a href="./Ja manual v1.14.json" download>v1.14</a> - 蝶番(Hinges)、色どりスイッチ(Multicolored Switches)、色変えスイッチ(Recolored Switches)、色なしスイッチ(Uncolored Switches)追加(Hatosableさん)、偽漢字(Not Kanji)追加
* \[21.09.09\] <a href="./Ja manual v1.13.json" download>v1.13</a> - 42、501、間違い(A mistake)、点字(Braille)、デフ・アレイ(Deaf Alley)、多角形(Polygons)、...?、タップ・コード(Tap Code)、9次元超立方体(The Octadecayotton)追加(Hatosableさん)、二進法パズル(Binary Puzzle)追加
* \[21.08.23\] <a href="./Ja manual v1.12.json" download>v1.12</a> - ブラックホール(Black Hole)、101匹ワンちゃん(101 Dalmatians)追加
* \[21.08.21\] <a href="./Ja manual v1.11.json" download>v1.11</a> - クド数独(Kudosudoku)、形状変化(Shape Shift)、神秘スクエア(Mystic Square)追加
* \[21.08.16\] <a href="./Ja manual v1.10.json" download>v1.10</a> - 奥行きペグ(Perspective Pegs)、歪曲スロット(Skewed Slots)追加
* \[21.08.13\] <a href="./Ja manual v1.9.json" download>v1.9</a> - 質問回答(Answering Questions)、会議妨害(Filibuster)、リスニング(Listening)、方向キューブ(Orientation cube)、配管(Plumbing)、ダイヤル式電話(Rotary Phone)、正方形ボタン(Square Button)追加(Hatosableさん)
* \[21.08.11\] <a href="./Ja manual v1.8.json" download>v1.8</a> - アナグラム(Anagrams)、集中(Concentration)、計算(Math)、ワードスクランブル(Word Scramble)追加(Hatosableさん、ありがとうございます!)
* \[21.08.10\] <a href="./Ja manual v1.7.json" download>v1.7</a> - レントゲン(X-ray)、モールスマティック(Morsematics)追加
* \[21.08.06\] <a href="./Ja manual v1.6.json" download>v1.6</a> - 保存場所をGithubに変更、ブラインド・アレイ(Blind Alley)追加