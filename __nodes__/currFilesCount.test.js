const { currFilesCountAsync } = require("../dist/index.cjs");
const path = require("path");

(async function() {
  const str = path.join(__dirname, "../");
  const result = await currFilesCountAsync(str, "window");
  const result1 = await currFilesCountAsync(str, "linux");
  console.log(result);
  console.log(result1);
})();
