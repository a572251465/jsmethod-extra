import { describe, expect, test } from "@jest/globals";
const { isString } = require("../src");

describe("function isString test", () => {
  test("params is null", () => {
    expect(isString(null)).toBeFalsy();
  });

  test("params is undefined", () => {
    expect(isString(undefined)).toBeFalsy();
  });

  test("params is number", () => {
    expect(isString(1)).toBeFalsy();
  });

  test("params is string", () => {
    expect(isString("")).toBeTruthy();
  });

  test("params is boolean", () => {
    expect(isString(true)).toBeFalsy();
  });

  test("params is array", () => {
    expect(isString([])).toBeFalsy();
  });

  test("params is object", () => {
    expect(isString({})).toBeFalsy();
  });

  test("params is function", () => {
    expect(isString(() => {})).toBeFalsy();
  });
});
