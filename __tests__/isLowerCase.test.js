import { describe, expect, test } from "@jest/globals";

import { isLowerCase } from "../src/index";

describe("isLowerCase", () => {
  test("正常的 isLowerCase 判断", () => {
    expect(isLowerCase("abc")).toBeTruthy();
  });

  test("非正常的 isLowerCase 判断", () => {
    expect(isLowerCase("Abc")).toBeFalsy();
    expect(isLowerCase(11)).toBeFalsy();
    expect(isLowerCase(null)).toBeFalsy();
    expect(isLowerCase(undefined)).toBeFalsy();
  });
});
