const path = require("path");
const del = require("rollup-plugin-del");
const terser = require("@rollup/plugin-terser");
const { babel } = require("@rollup/plugin-babel");

const resolvePath = (...args) => path.resolve(__dirname, ...args);

module.exports = {
  input: resolvePath("./src/commonjs.js"),
  output: [
    {
      file: resolvePath(`./dist/index.cjs.js`),
      format: "cjs",
      plugins: []
    },
    {
      file: resolvePath(`./dist/index.cjs.min.js`),
      format: "cjs",
      plugins: [terser()]
    }
  ],
  plugins: [del(), babel({ babelHelpers: "bundled" })]
};
