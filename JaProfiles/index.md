---
layout: default
title: 日本語対応モジュールプロファイル
description: 日本語対応モジュールのプロファイルを提供しています。プロファイルの使い方についても記載しております。
lang: ja_JP
---
# 日本語対応モジュールプロファイル

## 最新版

* <a href="./Ja manual v1.25.json" download>v1.25</a> \[最終更新: 21.12.01\]
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
  * [Dynamic Mission Generator](https://steamcommunity.com/sharedfiles/filedetails/?id=1633427044)の生成文字列で、`profile:[name]`を利用することで、プロファイルで有効化されているモジュールからランダムにモジュールを出現させることができます。詳しくは、[DMGミッションの作り方](/MissionCreating/dmg)を参考にする。
  * [Profile Revealer](https://steamcommunity.com/sharedfiles/filedetails/?id=2007817583)から、現在の選択しているモジュールがどのプロファイルによって有効化しているかを確認することができます。どの分析担当者にモジュールを割り振るかを決めるのに便利です。

## 変更ログ
* \[21.12.01\] <a href="./Ja manual v1.25.json" download>v1.25</a> 健忘症(Amnesia)、迷路忘る勿かれ(Forget Maze Not)、４ライト(Four Lights)、自由パスワード(Free Password)、果物(Fruits)、ガラクトロン・ベンダー(Gadgetron Vendor)、徐々にスイカ(Gradually Watermelon)、画像記憶(Graphic Memory)、食料品店(Grocery Store)、モジュロ(Modulo)、モールス戦争(Morse War)、ミステリーモジュール(Mystery Module)、お絵描きロジック(Nonogram)、俊敏数字(Number Nimbleness)、ナンバーパッド(Number Pad)、ナンバー(Numbers)、絵画(Painting)、パイ(Pie)、トランプ順序(Point of Order)、詩(Poetry)、Ｘを押せ！(Press X)、逆モールス信号(Reverse Morse)、セ.ッ.ト.(S.E.T.)、サイモンの響き(Simon Sounds)、サイモンの星(Simon's Star)、ファーロイドジュークボックス(The Furloid Jukebox)、巨人の飲み物(The Giant's Drink)、数字暗号(The Number Cipher)、ラジオ(The Radio)、プランジャーボタン(The Plunger Button)、ユニコード(Unicode)、ヴィジュネル暗号(Vigenère Cipher)、視覚障害(Visual Impairment)追加(ひむさん)、回路接続(Probing)、巻き戻し(Going Backwards)追加
* \[21.11.09\] <a href="./Ja manual v1.24.json" download>v1.24</a> オンリーコネクト(Only Connect)追加(ひむさん)、正方形(A Square)、アビス(Abyss)、バックドア・ハッキング(Backdoor Hacking)、偉大なるブームター(Boomtar the Great)、有限ループ(Finite Loop)、灯台下暗し(Hidden In Plain Sight)、あっち向いてホイ(Look, Look Away)、並行迷路(Parallel Mazes)、Steamセレクター(Steam Selector)、超巨大ブラックホール(Supermassive Black Hole)、頻脈(Tachycardia)、コーンフラワーボタン(The Cornflower Button)、軌跡(Trajectory)追加
* \[21.11.01\] <a href="./Ja manual v1.23.json" download>v1.23</a> 悩ましき矢印(Annoying Arrows)、黒色矢印(Black Arrows)、ブラインド矢印(Blind Arrows)、青色矢印(Blue Arrows)、ダブル矢印(Double Arrows)、灰色矢印(Gray Arrows)、緑色矢印(Green Arrows)、橙色矢印(Orange Arrows)、桃色矢印(Pink Arrows)、紫色矢印(Purple Arrows)、虹色矢印(Rainbow Arrows)、赤色矢印(Red Arrows)、鴨羽色矢印(Teal Arrows)、白色矢印(White Arrows)、黄色矢印(Yellow Arrows)追加(Hatosableさん) 暗号化LED(LED Encryption)、LEDグリッド(LED Grid)、ライトサイクル(Light Cycle)、論理(Logic)、大理石(Marble Tumble)、連打算数(Mashematics)、マスターマインド・シンプル(Mastermind Simple)、迷路スクランブラー(Maze Scrambler)、マイクロコントローラー(Microcontroller)、現代暗号(Modern Cipher)追加(ひむさん)、 Extended Button Order削除(仕様変更後マニュアルが対応していないため)
* \[21.10.21\] <a href="./Ja manual v1.22.json" download>v1.22</a> カレンダー(Calendar)、チェス(Chess)、グリッドロック(Gridlock)、象形文字(Hieroglyphics)、狩猟(Hunting)、アイスクリーム(Ice Cream)、容疑者特定(Identity Parade)、IKEA、ゲームパッド(The Gamepad)、アイフォン(The iPhone)、ジャック・オー・ランタン(The Jack-O'-Lantern)、ジュークボックス(The Jukebox)、迷宮(The Labyrinth)追加(ひむさん)、手順(Instructions)追加
* \[21.10.15\] <a href="./Ja manual v1.21.json" download>v1.21</a> 方程式(Equations)、エラーコード(Error Codes)、エテルナ(Etterna)、スケッチブック(Etch-A-Sketch)、偶数か奇数(Even Or Odd)、拡張ボタン順序(Extended Button Order)、拡張パスワード(Extended Password)、因数迷路(Factoring Maze)、因数分解(Factoring)、欠陥背景(Faulty Backgrounds)、欠陥二進数(Faulty Binary)、フェスティバル鍵盤(Festive Piano Keys)、曜日の特定(Find The Date)、ファイア・ダイアモンド(Fire Diamonds)、５文字の単語(Five Letter Words)、国旗(Flags)、光の記憶(Flash Memory)、点滅ライト(Flashing Lights)、殺人(Murder)、数字(The Digit)、アヒル(The Duck)、爆発するペン(The Exploding Pen)追加(ひむさん)
* \[21.10.11\] <a href="./Ja manual v1.20.json" download>v1.20</a> デジタルダイヤル(Digital Dials)、デジタル暗号(Digital Cipher)、次元破壊(Dimension Disruption)、方向ボタン(Directional Button)、割り切れる数字(Divisible Numbers)、ドミノ(Dominoes)、何も押すな(Don't Touch Anything)、二桁(Double Digits)、二色(Double Color)、卵(egg)、ルーンパスワード(Elder Password)、新・絵文字算(Emoticon Math)、暗号化サイコロ(Encrypted Dice)追加(ひむさん)
* \[21.10.09\] <a href="./Ja manual v1.19.json" download>v1.19</a> 0、1-2-3-2-1、14、2048、7、64、欠陥7セグメントディスプレー(Faulty Seven Segment Displays)追加(Hatosableさん)、座標(Coordinates)、コーナー(Corners)、廊下(Corridors)、カウントダウン(Countdown)、クラックボックス(Crackbox)、クレイジートーク(Crazy Talk)、暗号キーパッド(Cryptic Keypad)、暗号化(Cryptography)、暗号パスワード(Cryptic Password)、カーソル迷路(Cursor Maze)、Ｄコード(D-CODE)、Ｄクリプト(D-CRYPT)、DACH迷路(DACH Maze)、日光の方向(Daylight Directions)、間引き(Decimation)、ダイヤル音声(Dialtones)、デトナト(DetoNATO)追加(ひむさん)
* \[21.10.09\] <a href="./Ja manual v1.18.json" download>v1.18</a> 盗難警報(Burglar Alarm)、蝶(Butterflies)、ボタングリッド(Button Grid)、ボタンの順序(Button Order)、順番ボタン(Button Sequence)、カエサルサイクル(Caesar Cycle)、キャッチフレーズ(Catchphrase)、文字コード(Character Codes)、チャンバー５(Chamber No. 5)、中国の数え方(Chinese Counting)、コード進行(Chord Progressions)、コードクオリティー(Chord Qualities)、古典主義オーダー(Classical Order)、コードクラッカー(Code Cracker)、色トーク(Colo(u)r Talk)、色の加算(Color Addition)、色の生成(Color Generator)、色付き六角形(Color Hexagons)、色の解読(Color Decoding)、色の番号(Color Numbers)、色の１と２(Color One Two)、色付きボタン(Colored Buttons)、色付き英字(Colored Letters)、色付きキーパッド(Colored Keys)、カラフル発狂(Colorful Insanity)、色付き矢印(Coloured Arrows)、複雑なキーパッド(Complex Keypad)、条件ボタン(Conditional Buttons)、料理(Cooking)、電卓(The Calculator)、コード(The Code)、色付き迷路(The Colored Maze)追加(ひむさん)
* \[21.10.02\] <a href="./Ja manual v1.17.json" download>v1.17</a> ブロックス(Bloxx)、シロナガスクジラ(Blue Whale)、論理キーパッド(Boolean Keypad)、ブーブチューブ(Boob Tube)、論理迷路(Boolean Maze)、ブローラーデータベース(Brawler Database)、休憩時間(Breaktime)、壊れたボタン(Broken Buttons)、イギリススラング(British Slang)追加(ひむさん)
* \[21.10.01\] <a href="./Ja manual v1.16.json" download>v1.16</a> 1000単語(1000 Words)、アンチチェンバー(Antichamber)、アルス・ゴエティア識別(Ars Goetia Identification)、アートの価格設定(Art Pricing)、Atbash暗号(Atbash Cipher)、占星術(Astrology)、音声キーパッド(Audio Keypad)、悪文(Bad Wording)、芸術鑑賞(Art Appreciation)、二進数(Binary)、バイバインの言葉(Baybayin Words)、ブラックジャック(Blackjack)、瞬きの停止(Blinkstop)、ブロックバスター(Blockbusters)、誕生日ケーキ(Birthday Cake)、アソート・アレンジメント(The Assorted Arrangement)、ブロック(The Block)追加(ひむさん)
* \[21.09.28\] <a href="./Ja manual v1.15.json" download>v1.15</a> - 16コイン(16 coins)、81、9-Ball(9ボール)、アメイジングボタン(A-maze-ing Buttons)、蓄積(Accumulation)、加算(Addition)、アドベンチャーゲーム(Adventure Game)、錬金術(Alchemy)、エイリアンファイリングの色(Alien Filing Colors)、アルファベット番号(Alphabet Numbers)、アルファベットルール(Alphabetical Ruling)、アモングス(amougus)、アロートーク(Arrow Talk)追加(ひむさん)、
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