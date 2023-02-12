import { describe, expect, test } from "@jest/globals";
const { isFunction } = require("../src");

describe("function isFunction test", () => {
  test("params is null", () => {
    expect(isFunction(null)).toBeFalsy();
  });

  test("params is undefined", () => {
    expect(isFunction(undefined)).toBeFalsy();
  });

  test("params is number", () => {
    expect(isFunction(1)).toBeFalsy();
  });

  test("params is string", () => {
    expect(isFunction("")).toBeFalsy();
  });

  test("params is boolean", () => {
    expect(isFunction(true)).toBeFalsy();
  });

  test("params is array", () => {
    expect(isFunction([])).toBeFalsy();
  });

  test("params is object", () => {
    expect(isFunction({})).toBeFalsy();
  });

  test("params is function", () => {
    expect(isFunction(() => {})).toBeTruthy();
  });
});
