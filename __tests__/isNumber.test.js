import { describe, expect, test } from "@jest/globals";
const { isNumber } = require("../src");

describe("function isNumber test", () => {
  test("params is null", () => {
    expect(isNumber(null)).toBeFalsy();
  });

  test("params is undefined", () => {
    expect(isNumber(undefined)).toBeFalsy();
  });

  test("params is number", () => {
    expect(isNumber(1)).toBeTruthy();
  });

  test("params is string", () => {
    expect(isNumber("")).toBeFalsy();
  });

  test("params is boolean", () => {
    expect(isNumber(true)).toBeFalsy();
  });

  test("params is array", () => {
    expect(isNumber([])).toBeFalsy();
  });
});
