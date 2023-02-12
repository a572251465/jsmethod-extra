import { describe, expect, test } from "@jest/globals";
const { addUrlPrefix } = require("../src");

describe("function addUrlPrefix test", () => {
  test("params is null", () => {
    expect(addUrlPrefix(null)).toBe(null);
    expect(addUrlPrefix("/", "")).toBe("/");
  });

  test("params is not string", () => {
    expect(addUrlPrefix(1)).toBe(1);
    expect(addUrlPrefix("test/001", 1)).toBe("test/001");
  });

  test("第一个参数首字母以/开头, 第二个参数是/", () => {
    expect(addUrlPrefix("/test/001", "/")).toBe("/test/001");
  });

  test("第一个参数 && 第二个参数拼接", () => {
    expect(addUrlPrefix("&test/001", "/")).toBe("/&test/001");
  })
});
