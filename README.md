# 中島金属 コーポレートサイト

Vite + React + TypeScript によるシングルページのコーポレートサイトです。
サイト上の文言はすべて日本語です。

## 使い方

```bash
npm install        # 依存パッケージのインストール（Node.js 20.19 以上）
npm run dev        # 開発サーバー（http://localhost:5173）
npm run build      # 本番ビルド（dist/ に出力）
npm run preview    # ビルド結果の確認
```

`dist/` フォルダの中身を、お使いのサーバー（静的ホスティング）へアップロードしてください。
`base: './'` を指定しているため、ルート直下でもサブディレクトリでも動作します。

## 画像の差し替え

`public/images/` に画像を置くだけで反映されます。ファイルが無い場合は、
レイアウトを崩さない代替表示（文字ロゴ・淡いメタリックの背景・「画像準備中」）になります。

| 用途 | 配置場所 |
| --- | --- |
| ロゴ（初回演出・ヘッダー） | `public/images/logo.svg`（または `logo.png` / `logo.webp`） |
| ヒーロー背景 | `public/images/hero.jpg`（または `hero.webp` / `hero.png`） |
| 製品・加工実績 | `public/images/gallery/work-01.jpg` 〜 `work-06.jpg` |

- 別のファイル名・拡張子、写真の点数、見出し・説明文・代替テキストは `src/config/site.ts` で変更できます。
- 読み込み速度のため、ヒーローは横 2400px 前後・300KB 以下、実績写真は横 1200px 前後・200KB 以下（WebP 推奨）を目安にしてください。
- 実績写真を差し替えたら、同ファイルの `alt`（代替テキスト）も写真の内容に合わせて書き換えてください。

## 構成

```
src/
  config/site.ts        会社情報・画像パス・実績データ
  components/           Header / Hero / Gallery / Contact / Footer / IntroSplash ほか
  hooks/                オープニング進行、現在地ハイライト
  styles/global.css     デザイントークンとスタイル
public/images/          差し替え用の画像置き場
```

## アクセシビリティ

- 「視覚効果を減らす」設定の環境では、オープニング演出とアニメーションを省略します。
- スキップリンク、キーボード操作、現在地表示（`aria-current`）、十分な文字コントラストに対応しています。
