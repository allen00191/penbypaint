# PenbyPaint 興趣班與工作坊（第一期：前端）

奶油紙畫布 + 水色 CTA 的公開網站。第一期用 Next.js 把 8 個頁面跑通，分類與內容皆為寫死 mock，**尚未接資料庫或後台**。

## 本機預覽

需要 Node.js 18+。

```bash
npm install
npm run dev
```

瀏覽器開啟 [http://localhost:3000](http://localhost:3000)。

| 指令 | 說明 |
|---|---|
| `npm run dev` | 開發伺服器（Turbopack） |
| `npm run build` | 生產建置 |
| `npm run start` | 執行建置結果 |
| `npm run lint` | ESLint |

## 寫死分類（第一期）

定義於 [`src/data/categories.ts`](src/data/categories.ts)。

課程：藝術系列 `art`、學術系列 `academic`、語言系列 `language`、幼兒系列 `kids`。

工作坊：節日系列工作坊 `festival`、馬賽克藝術 `mosaic`、永生花浮遊花 `preserved-flower`。

前台以 `?category=slug` 篩選，例如 `/courses?category=art`、`/workshops?category=mosaic`。

## 頁面

- `/` 主頁：Banner、熱門課程、最新工作坊、機構合作簡介
- `/about` 關於我們
- `/courses`、`/courses/[slug]` 課程
- `/workshops`、`/workshops/[slug]` 工作坊（含報名意向表單 UI）
- `/blog`、`/blog/[slug]` 專欄（mamoribito 式 pill + 卡片 + 分頁）
- `/partnerships` 機構合作
- `/videos` 教學影片（公開 embed / 需查詢遮罩）
- `/contact` 聯絡我們

表單送出只在畫面上提示，**不會寫入資料庫**。

視覺 token 見 [`Design.md`](Design.md)。

## 第二期（尚未實作）

- Prisma + HostingSpeed **MySQL 8**
- 管理員登入與 CMS
- 把上述 7 個分類 seed 進 `Category` 表，後台才開放增刪
- 聯絡／合作／工作坊意向真正落庫

## 第一期打包（HostingSpeed）

本機產出可上傳的 zip（不含 `node_modules`）：

```bash
npm run pack:host
```

檔案在 `dist/penbypaint-ver1.zip`。解壓後用 cPanel **Setup Node.js App**（不是純 PHP 靜態空間）：

- Node.js **20+**、Production、startup file 設 `server.js`
- Run NPM Install 後再 Start App

分類篩選依賴 Node 伺服器，不能只把檔案丟進 `public_html` 當靜態站。第二期再補 `DATABASE_URL` 與資料庫。
