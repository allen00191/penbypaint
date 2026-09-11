/**
 * HostingSpeed / cPanel「Setup Node.js App」啟動檔。
 * 必須聽 process.env.PORT，不可寫死 3000。
 */
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT) || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port, hostname, () => {
      console.log(`PenbyPaint ready on ${hostname}:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start Next.js", err);
    process.exit(1);
  });
