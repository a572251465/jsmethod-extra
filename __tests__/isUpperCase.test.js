import { describe, expect, test } from "@jest/globals";

import { isUpperCase } from "../src/index";

describe("isUpperCase", () => {
  test("正常的 isUpperCase 判断", () => {
    expect(isUpperCase("ABC")).toBeTruthy();
  });

  test("非正常的 isUpperCase 判断", () => {
    expect(isUpperCase("Abc")).toBeFalsy();
    expect(isUpperCase(11)).toBeFalsy();
    expect(isUpperCase(null)).toBeFalsy();
    expect(isUpperCase(undefined)).toBeFalsy();
  });
});
