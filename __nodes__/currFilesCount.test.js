const { currFilesCountAsync } = require("../dist/index.cjs");
const path = require("path");

(async function() {
  const str = path.join(__dirname, "../");
  const result = await currFilesCountAsync(str);
  console.log(result);
})();
