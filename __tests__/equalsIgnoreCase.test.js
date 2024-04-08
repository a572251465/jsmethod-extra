import { describe, expect, test } from "@jest/globals";
import { equalsIgnoreCase } from "../src";

describe("equalsIgnoreCase", () => {
  test("正常的 equalsIgnoreCase 判断", () => {
    expect(equalsIgnoreCase("abc", "ABC")).toBeTruthy();
    expect(equalsIgnoreCase(null, undefined)).toBeTruthy();
    expect(equalsIgnoreCase(1, 1)).toBeTruthy();
  });

  test("非正常的 equalsIgnoreCase 判断", () => {
    expect(equalsIgnoreCase("abc", "ABC1")).toBeFalsy();
    expect(equalsIgnoreCase(1, 2)).toBeFalsy();
  });
});
