import { cpSync, mkdirSync, rmSync, existsSync, writeFileSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";

const root = process.cwd();
const distDir = join(root, "dist");
const stage = join(distDir, "penbypaint-ver1");
const zip = join(distDir, "penbypaint-ver1.zip");

function copyFile(name) {
  const from = join(root, name);
  if (!existsSync(from)) {
    throw new Error(`缺少檔案：${name}`);
  }
  cpSync(from, join(stage, name));
}

function copyDir(name, filter) {
  const from = join(root, name);
  if (!existsSync(from)) {
    throw new Error(`缺少資料夾：${name}`);
  }
  cpSync(from, join(stage, name), {
    recursive: true,
    filter: (src) => (filter ? filter(src) : true),
  });
}

rmSync(distDir, { recursive: true, force: true });
mkdirSync(stage, { recursive: true });

for (const file of [
  "package.json",
  "package-lock.json",
  "next.config.mjs",
  "tsconfig.json",
  "postcss.config.mjs",
  "eslint.config.mjs",
  "server.js",
  "README.md",
]) {
  copyFile(file);
}

if (existsSync(join(root, "next-env.d.ts"))) {
  copyFile("next-env.d.ts");
}

copyDir("src");
copyDir("public");
copyDir(".next", (src) => !src.includes(`${join(".next", "cache")}`) && !src.includes(".next\\cache"));

writeFileSync(
  join(stage, "部署說明.txt"),
  `PenbyPaint 第一期（前端）— HostingSpeed / cPanel 上傳說明
================================================

這個 zip 不含 node_modules。請在 Linux 主機上安裝依賴，避免本機 Windows 的套件在伺服器跑不起來。

建議流程
1. 解壓到網站根目錄以外的資料夾，例如 /home/帳號/penbypaint（不要只丟進 public_html 當靜態檔）。
2. cPanel → Setup Node.js App → Create Application
   - Node.js 版本：20 或以上
   - Application mode：Production
   - Application root：penbypaint（解壓後的資料夾）
   - Application URL：你的網域（路徑空白＝整站）
   - Application startup file：server.js
3. 先 Stop App，再按 Run NPM Install。
4. 若主機記憶體足夠，可在終端執行 npm run build 重新建置。
   此包已含本機建置的 .next，通常可直接 Start App。
5. Start App，用瀏覽器打開網域確認。

注意
- 分類篩選（/courses?category=art 等）需要 Node.js，不能當純 HTML 靜態站。
- 表單目前只在畫面上提示，尚未寫入資料庫。
- 第二期才接 MySQL / 後台。
`,
  "utf8",
);

execSync(
  "powershell -NoProfile -Command \"Compress-Archive -Path (Join-Path (Get-Location) 'dist\\\\penbypaint-ver1\\\\*') -DestinationPath (Join-Path (Get-Location) 'dist\\\\penbypaint-ver1.zip') -CompressionLevel Optimal -Force\"",
  { stdio: "inherit" },
);

console.log(`已產出：${zip}`);
