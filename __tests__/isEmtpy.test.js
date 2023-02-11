import { describe, expect, test } from "@jest/globals";
const { isEmpty } = require("../src");

describe("function isEmpty test", () => {
  test("params is space", () => {
    expect(isEmpty("")).toBeTruthy();
  });

  test("params is null", () => {
    expect(isEmpty(null)).toBeTruthy();
  });

  test("params is undefined", () => {
    expect(isEmpty(undefined)).toBeTruthy();
  });

  test("params is 0", () => {
    expect(isEmpty(0)).toBeTruthy();
  });

  test("params is false", () => {
    expect(isEmpty(false)).toBeTruthy();
  });

  test("params is true", () => {
    expect(isEmpty(true)).toBeFalsy();
  });

  test("params is 1", () => {
    expect(isEmpty(1)).toBeFalsy();
  });
});
