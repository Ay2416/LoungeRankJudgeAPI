# LoungeRankJudgeAPI

Powered by Next.js : [https://nextjs.org/](https://nextjs.org/)

## 概要 / Expanation
* このプログラムはMK8DX 150ccラウンジ、200ccラウンジにおけるランクの判定をmmrをもとに出すweb apiです。
* This program is a web api that determines rank in the MK8DX 150cc and 200cc lounges based on mmr.

## 使い方 / How to use?

**Japanese**

URLに以下の感じでアクセスすると使用することができます。

※ただし情報把握をできなかった都合上、150ccはシーズン9以降、200ccはシーズン6以降のみしか数を出せません。申し訳ありません。

例：[https://lounge-rank-judge-api.vercel.app/api/s10/150ccRankJudge?mmr=15000](https://lounge-rank-judge-api.vercel.app/api/s10/150ccRankJudge?mmr=15000)

```
https://lounge-rank-judge-api.vercel.app/api/s[シーズン数]/[150か200か]ccRankJudge?mmr=[mmr数]
```

**English**

You can use it by accessing the URL with the following feeling.

*However, due to circumstances that prevented us from ascertaining the information, we can only provide information for 150cc after Season 9 and 200cc after Season 6. Our apologies.

Example : [https://lounge-rank-judge-api.vercel.app/api/s10/150ccRankJudge?mmr=15000](https://lounge-rank-judge-api.vercel.app/api/s10/150ccRankJudge?mmr=15000)

```
https://lounge-rank-judge-api.vercel.app/api/s[number of seasons]/[150 or 200]ccRankJudge?mmr=[number of mmr]
```

## 参考にしたサイト / Refer sites

* まくろぐ | Next.js の API Routes 機能で Web API を作成する:[https://maku.blog/p/qcp2coz/](https://maku.blog/p/qcp2coz/)
* Qiita | @pikimaru Next.jsで動的なAPIエンドポイントを作成する(ルーティング):[https://qiita.com/pikimaru/items/2702bbcb73af85312c0f](https://qiita.com/pikimaru/items/2702bbcb73af85312c0f)
* pRyogram プリョグラム | 【TypeScript】 string（文字列）とnumber（数値）の型の変換方法:[https://pryogram.com/typescript/string-number-type-conversion/](https://pryogram.com/typescript/string-number-type-conversion/)
* CodeZine | VercelにNext.jsアプリケーションをデプロイする～Vercel上でNext.jsを動かす利点も紹介:[https://codezine.jp/article/detail/16118](https://codezine.jp/article/detail/16118)
