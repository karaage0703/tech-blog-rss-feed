# <img src="src/site/images/icon-transparent.png" height=26> AI情報RSS
AI関係情報の更新をまとめたRSSフィードを配信しています。  

[https://yamadashy.github.io/tech-blog-rss-feed/](https://karaage0703.github.io/tech-blog-rss-feed/)

[yamadashyさんのtech-blog-rss-feedリポジトリ](https://github.com/yamadashy/tech-blog-rss-feed)をフォークして作成いたしました。

サイトは[src/resources/feed-info-list.ts](https://github.com/karaage0703/tech-blog-rss-feed/blob/main/src/resources/feed-info-list.ts) で管理しています。


### 仕組み
GitHub Actions で定期的に更新されており、サイトの生成は [Eleventy](https://www.11ty.dev/) を使用しています。

更新は多少遅延ありますが以下のタイミングで行います。
- 平日 8時-24時の1時間おき
- 休日 8時-24時の2時間おき

### 開発環境とコマンド
環境
- Node.js >= 20

パッケージのインストール
```bash
$ npm install
```

フィード生成とサイト立ち上げ
```bash
$ # フィードを取得して作成
$ npm run feed-generate

$ # localhost:8080 で確認
$ npm run site-serve
```

コードのチェック
```bash
$ # eslint, tsc --noEmit
$ npm run lint

$ # テスト
$ npm run test
```

## ライセンス
MIT
