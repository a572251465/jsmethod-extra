const path = require("path");
const del = require("rollup-plugin-del");
const terser = require("@rollup/plugin-terser");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const ts = require("@rollup/plugin-typescript");
const { babel } = require("@rollup/plugin-babel");

const resolvePath = (...args) => path.resolve(__dirname, ...args);

const basicsOutputConfig = [
  "esm",
  "cjs",
  ...["esm", "cjs"].map((item) => ({
    format: item,
    plugins: [terser()],
    exports: "named",
    file: resolvePath(`../dist/index.${item}.min.js`),
  })),
  {
    format: "iife",
    file: resolvePath(`../dist/index.iife.min.js`),
    plugins: [terser()],
    name: "jsMethods",
  },
];
const genOutputConfig = (arr = []) => {
  if (arr.length === 0) return {};

  return arr.map((item) => {
    if (typeof item === "string")
      return {
        file: resolvePath(`../dist/index.${item}.js`),
        format: item,
        exports: "named",
        plugins: [],
      };
    return item;
  });
};

module.exports = {
  input: resolvePath("../src/index.ts"),
  output: genOutputConfig(basicsOutputConfig),
  plugins: [
    del(),
    babel({ babelHelpers: "bundled" }),
    nodeResolve(),
    commonjs(),
    ts(),
  ],
};
