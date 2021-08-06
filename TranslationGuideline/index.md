# マニュアル日本語化ガイドライン

## はじめに

これは私(tepel)が50以上のマニュアルを翻訳して感じたことの覚書です。ほとんど自分用に書いていますが、将来的に誰かのためになるかもしれないと思って残しておきます。

## テンプレートについて

[現在の使用しているテンプレート](/TemplateJa.zip)

* マニュアルに関するルールは変更される可能性があるので、常にDiscordの#repo-discussionに目を通すようにしましょう。
* 元テンプレートから変更する点
  * `<html>`から`<html lang="ja">`に変更
  * `<link rel="stylesheet" type="text/css" href="css/font-japanese.css">`を`font.css`の下に追加
  * h2タグの開始は`モジュール詳細：`
    * `:`(半角)ではなく`：`(全角)
  * ファイル名は`Module Name translated (日本語 — モジュール名) (Creator).html`
    * `Module Name`に元のモジュール名
    * `モジュール名`に日本語のモジュール名
    * `Creator`に自分の名前
    * `-`でも`ー`でもなく`—`なので注意
    * 元マニュアル以外の翻訳の場合は`Module Name translated (日本語 — モジュール名) (Creator) 用途.html`
      * 例: `The Button translated (日本語 — ボタン) (Creator) 最適化.html`

## アップロード

* アップロード前にすること
  * Logbotに`!lint`とコメントをしながらファイルをアップロードする。文法エラーなどがあれば指摘してくれる
  * SVGは[SVGOMG](https://jakearchibald.github.io/svgomg/)を使って圧縮
  * PNGは[PNG Crush](https://pngcrush.com/)を利用して圧縮
* 方法1 - Githubを使う方法(Gitの使い方がわかる方向け)
  1. [レポジトリのソースコード](https://github.com/Timwi/KtaneContent)をフォークしてクローンする
  2. ファイルを追加してコミット、プッシュする。
  3. プルリクエストを送る
* 方法2 - #repo-requestに提出する方法
  1. Discordに参加し、#repo-requestにテンプレートのzipファイルの構造の通りにアップロードする
  2. 時間はかかるけど、メンテナーがそのうち反映してくれる(私にDMくれれば早めに対処します)

## SVGについて

* マニュアル右上のSVGについては、無理に翻訳する必要はない。
* マニュアルに書かれていない文字(\[ディスプレイ\]など)の場合は翻訳したほうが良い
  * モジュールに書かれている文字がそのままSVGにかかれている場合は翻訳しない
  * カッコはすべて\[\]に統一(元SVGがそうでなくても)
* それ以外のSVGのうち、文字が含まれているものは基本的に翻訳する。
* 別ファイルのSVG(マニュアル右上のSVGを含む)の文字はすべてパスに変換する
  * Inkscapeで文字を選択→Ctrl+Shift+C

## ルールシードについて

* [ルールシードMOD](https://steamcommunity.com/sharedfiles/filedetails/?id=2037350348)を使うと、シードによってマニュアルが書き換えることができる。
  * 例: [3D迷路#5](https://ktane.timwi.de/HTML/3D%20Maze%20translated%20(%E6%97%A5%E6%9C%AC%E8%AA%9E%20%E2%80%94%203D%E8%BF%B7%E8%B7%AF)%20(tepel).html#5)と[3D迷路#10](https://ktane.timwi.de/HTML/3D%20Maze%20translated%20(%E6%97%A5%E6%9C%AC%E8%AA%9E%20%E2%80%94%203D%E8%BF%B7%E8%B7%AF)%20(tepel).html#10)
* 判別方法: `<script src="js/ruleseed.js"></script>`が入っていたら基本的にはルールシード対応モジュール(たまにミスって含まれているときもあるから注意)
* **Javascriptの知識が必要になるので、無理にルールシードに対応しなくてもよい**。マニュアルを非対応にするには`<script src="js/ruleseed.js"></script>`の行を削除すれば良い。
* ルールシードの対応については、モジュールによるので、よくコードを読んで対応すること。

## 用語について

**間違っている、こうした方がよい、という提案がありましたら教えて下さい。場合によってはすべてのマニュアルを一括で変更できます**

### 公式マニュアルにかかれているもの

これらは必ず遵守する

* Regular Module - モジュール, Needy Module - 特殊モジュール
  * Moduleは「モジュールと特殊モジュール」で訳す
* Serial number - シリアルナンバー
  * シリアル番号ではないので注意
* Lit indicator - 点灯したインジケーター
* Countdown timer - カウントダウンタイマー
* Strike - ミス(名詞)、ミスが記録される(動詞)
* Betteries - バッテリー
  * 電池ではないので注意
  * AA batteries - 単3バッテリー
  * D battery - 単1バッテリー
* Port - ポート
  * Parallel - パラレル
  * Serial - シリアル
  * Stereo RCA - ステレオRCA
  * それ以外は英字のまま
* More than X, Less than X - Xより多い、Xより少ない
  * わかりにくい、との批判もあるが、そのわかりにくさがゲームの鍵でもあるため
  * X or More, X or lessはX以下、X以上でよい。

### 公式マニュアルにかかれていないもの

迷ったら参考にする程度でよい

* Unlit indicator - 点灯していないインジケーター
* Row, Collumn - 段、列
* Alphabet - 英字
* Reading order - 読み順
  * できるだけフットノートで意味を追記したほうがよい
* Digital root - 数字根
* Magenta, Cyan - マゼンタ、シアン
  * ピンク、水色などにしない理由は、1. 色の合成で意味を成す場合があるから 2. Magentaと別でPinkがある場合があるから
* 他のモジュール名は、翻訳名と原名のどちらも書く
  * どちらをベースにプレイしている人でもプレイできるように

## 迷ったら...

* マニュアルの第一の目標は正しく情報を伝えることです。一部のモジュール(特に古いモジュール)は、そもそも解除するのに情報が不足している場合があります。そのような場合はガンガン追記して大丈夫です。
  * 例えば、[Third Base](https://ktane.timwi.de/HTML/Third%20Base.html)はモジュールが逆さまになっていることが書かれていませんが、これは表を読む上で重要な情報なので、追記しました。
* マニュアルでわかりにくいところがあり、それが意図的にわかりにくく書かれているのであればその選択は尊重すべきです。書き方が悪いだけである可能性が高い場合は、言い換えてもよいです。
  * 例えば、[Letter Keys](https://ktane.timwi.de/HTML/Letter%20Keys.html)は意図的に数字をアラビア数字で書いていませんので、それを尊重してすべて漢字で翻訳しました。
  * [Rock-Paper-Scissors-Lizard-Spock](https://ktane.timwi.de/HTML/Rock-Paper-Scissors-Lizard-Spock.html)のじゃんけんの判定は、ドラマからの引用ですので、これもあえてわかりにくく書いています。
  * [Decolored Squares](https://ktane.timwi.de/HTML/Decolored%20Squares.html)の「次の正方形」の定義はかなりわかりにくいですが、これが意図的にわかりにくく書かれているとは思えなかったので変更しました。
* 直訳である必要もないので、適宜日本語としてふさわしい文章に書き換えてください。
