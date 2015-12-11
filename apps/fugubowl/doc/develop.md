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

# Gist

* 汎用性のあること、よく書くことはGistにも書く
* 別のプロジェクトから参照できる


# TODO List

* Slack or Gmailの下書き or markdown
* 明日やることをTODOにしておくとスタートが速い


# 期間
* メインゲーム部分のプロトタイプに1日
* スコアやUI、保存など、完成させるために2週間
* Webサイトや、このドキュメントなどにさらに1週間
* 平日含む
* ちゃんと完成させるのは大変

# Google Play

* 広告用画像はアプリページの1番上に出るので重要
* それを撮影するため用のシーンを作った

# Amazonアプリストア
* キャンペーンをやっていたのでこちらにもUP
* Google Playと同じapkをUPするだけ
* 説明文や画像は設定する必要がある
* レビューに出すとキャンセルできず、レビュー結果を待つしかなくなるので、1日に何度も上げ直すことはできない(2015/12現在)


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

# iTunesConnect

* Android側が落ちついてきてからサブミットする
* スクリーンショットのリサイズスクリプトいい加減書いた

# Xcode

* (Unity)IL2CPP(64bit support)になっているか確認（5.2ではなっておらず、Upload完了したと思ったら怒られることになる）
* (Unity)ArchitectureもUniversalに変更
* デバッグ実行できることを確認
* Archiveする　(出力はOrganizerで確認できる)
* アーカイブ結構時間かかるのぅ
* そこからUpdate to App Storeできる
* App IDs "wildcard"を再利用
* Provisioning Profiles アプリごとに作成
* アドオン入れるほど、ビルドが通るか不安になる




# アイコン
* シンプルにしたが、手抜きに見える
* 他のアプリを見てみよう。豪華
* 手抜きのシンプルか、そぎ落としたシンプルか

# お役立ちWebサービス
* http://makeappicon.com/# アイコン一括リサイズ
* アイコンPSDテンプレート



# Amazon Store

* キャンペーンしてたのでAmazon Storeにも申請した
* Google Play用に素材を用意していれば、リサイズで済む
* スクリーンショットは600x1024にリサイズ