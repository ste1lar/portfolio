# Portfolio

Next.js、TypeScript、Tailwind CSS を基盤に制作した個人ポートフォリオサイトです。  
2025年11月に全体構造と UI/UX の再設計を行い、  
2026年1月には Server-first アーキテクチャを中心とした構造リファクタリングを実施しました。

---

## 🧭 プロジェクト概要

- **期間:** 2024.07 ~ 2026.01
- **タイプ:** Personal Project / Fullstack
- **担当:** 全機能の設計・フロントエンド実装、Vercel デプロイ

---

## 🛠 技術スタック

| 区分                       | 技術スタック                                    |
| -------------------------- | ----------------------------------------------- |
| Frontend                   | HTML5, Tailwind CSS, TypeScript, React, Next.js |
| Infra & Deployment         | Vercel                                          |
| Collaboration & Versioning | GitHub                                          |

---

## 🎯 主な機能

- 自己紹介：プロフィールと紹介文を通じて、内容を分かりやすく構成
- 技術スタック：保有している主要な技術スキルを簡潔に整理
- 開発経験：主なプロジェクトと開発過程を要約して紹介
- プロジェクト一覧：個人・チームプロジェクトをカード形式で表示
- プロジェクト詳細：背景、課題解決の過程、学びを詳細に記録
- 多言語対応：i18n ライブラリを用いた日本語・韓国語切り替え機能

---

## 🧩 リファクタリング（Server-first + Client Islands）

レンダリングコストと保守性の向上を目的として、  
画面の大部分を **Server Component** とし、  
ユーザー操作が必要な箇所のみを **Client Component（クライアントアイランド）** として分離しました。

### 1. `use client` の最小化

- 翻訳および静的コンテンツは `next-intl/server` を利用しサーバー側でレンダリング
- `window` 参照、イベント処理、状態管理など  
  ブラウザ API が必要な場合のみ Client Component として分離

👉 画面全体をクライアント化せず、  
**操作単位で最小限のクライアントアイランドを構成**しています。

### 2. フォルダ構成の整理（Feature / Shared 分離）

- `app/`：ルーティングおよびページ構成のみを担当
- `features/`：ドメイン単位の UI および画面ロジック
- `shared/`：共通 UI コンポーネント、ユーティリティ、Provider など

👉 UI とドメインロジックを feature 単位で管理し、  
保守性と可読性を重視した構成としています。

---

## 🗂️ 構成

```txt
src/
  app/
    [locale]/
      page.tsx
      projects/
        [slug]/
          page.tsx
          not-found.tsx
  features/
    home/
    project-detail/
    layout/
  shared/
    ui/
    utils/
    types/
messages/
  ko.json
  ja.json
```

## 📎 その他

開発背景や課題解決の過程、学びについては
ポートフォリオサイトにて整理しています。

- https://ste1lar.dev/projects/portfolio
