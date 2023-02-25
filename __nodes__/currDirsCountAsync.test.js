const { currDirsCountAsync } = require("../dist/index.cjs");
const path = require("path");

(async function () {
  const l1 = await currDirsCountAsync(path.join(__dirname, "../"), "window");
  const l2 = await currDirsCountAsync(path.join(__dirname, "../"), "linux");
  console.log(l1, l2);
})();
