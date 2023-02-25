const { sureDirAsync } = require("../dist/index.cjs");
const path = require("path");

const rootPath = path.join(__dirname, "../");

(async function () {
  await sureDirAsync("aa/bb/cc", rootPath, "window");
  await sureDirAsync("ee/ff/gg", rootPath, "window");
})();
