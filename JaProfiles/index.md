# 日本語対応モジュールプロファイル

## 最新版

* <a href="./Ja manual v1.6.json" download>v1.6</a>
* <a href="./Wordless v1.0.json" download>Wordless v1.0</a>

Wordlessは日本語訳は存在しないものの、英語の含まれていないマニュアルが存在するものを有効化します。(具体例: [❖](https://ktane.timwi.de/HTML/%E2%9D%96.html))

どちらのプロファイルも**分析担当者用**のプロファイルです。必要に応じて処理担当者用に変更してください。

## 変更ログ

* Ja Manual v1.6 - 保存場所をGithubに変更、Blind Alley追加


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