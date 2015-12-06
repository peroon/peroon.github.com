# FUGUBOWL 開発メモ

# 動機
* 事前にボクセルモデルをいくつも作っていた
* フグがかわいくできたので、これを使いたい
* 手触りのいいゲームがいいな
* ちょっと前、ボーリングにはまっていたのでそれにしよう

# モデリング
* cubicle2で事前に作り溜めておいたモデルを使用
* 軸が中心からずれていたので要改善

# プニコン
* 白猫に似たやつ
* Canvas上で実装
* 汎用性あり

# AssetStore

* AdvancedPlayerPrefs 
* DOTWeen

# 通信
* Parseでランキング

# ソーシャル
* ランキング
* スクリーンショットをSNSで共有


# 定数
* BGM
* SE
* テーブル名、列名
* enumもいいね

# Font

* zorque　大文字のみ
* 英語フォントは軽いのが好き
* Macにインストールするのも簡単。Photoshopでロゴを作った

# 自作アセット

* Confetti　アセットストアに申請したが、Too Simpleでリジェクトされたもの

# ScriptableObject

* シーンをまたいで共通なデータはこれで



# 期間
* メインゲーム部分のプロトタイプに1日
* スコアやUI、保存など、完成させるために2週間
* Webサイトや、このドキュメントなどにさらに1週間
* 平日含む
* ちゃんと完成させるのは大変

# Google Play

* 広告用画像はアプリページの1番上に出るので重要
* それを撮影するため用のシーンを作った

# Androidの権限つけすぎ問題
* ソーシャルアセットを入れたら、デフォルトでは権限が多く付いた
* 不要な機能（たとえば課金）などはOFFにしておく
* そうしないと権限大量の不気味なアプリに
* UltimateMobileSettingsをインスペクタから編集
* AndriodManifestをリネームして待避させ、そこからビルド
* Parseだけなら、INTERNET, ACCESS_NETWORK_STATEの2つで十分

# AndroidManifest

* SystemInfo.deviceUniqueIdentifierを使うと、アクセス権限READ_PHONE_STATEが加わる
* ユーザIDとして使っていたが、自作Static関数に移行した
* 電話帳を見ていると思われてしまうため

# アイコン
* シンプルにしたが、手抜きに見える
* 他のアプリを見てみよう。豪華
* 手抜きのシンプルか、そぎ落としたシンプルか


# Amazon Store

* キャンペーンしてたのでAmazon Storeにも申請した
* Google Play用に素材を用意していれば、リサイズで済む