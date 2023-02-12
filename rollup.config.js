const path = require("path");
const del = require("rollup-plugin-del");
const terser = require("@rollup/plugin-terser");
const { babel } = require("@rollup/plugin-babel");

const resolvePath = (...args) => path.resolve(__dirname, ...args);

const basicsOutputConfig = [
  "cjs",
  "esm",
  {
    format: "iife",
    file: resolvePath(`./dist/index.iife.js`),
    plugins: [],
    name: "jsMethods"
  },
  ...["cjs", "esm"].map((item) => ({
    format: item,
    plugins: [terser()],
    file: resolvePath(`./dist/index.${item}.min.js`)
  })),
  {
    format: "iife",
    file: resolvePath(`./dist/index.iife.min.js`),
    plugins: [terser()],
    name: "jsMethods"
  }
];
const genOutputConfig = (arr = []) => {
  if (arr.length === 0) return {};

  return arr.map((item) => {
    if (typeof item === "string")
      return {
        file: resolvePath(`./dist/index.${item}.js`),
        format: item,
        plugins: []
      };
    return item;
  });
};

module.exports = {
  input: resolvePath("./src/index.js"),
  output: genOutputConfig(basicsOutputConfig),
  plugins: [del(), babel({ babelHelpers: "bundled" })]
};
