import { describe, expect, test } from "@jest/globals";

import { equals } from "../src/index";

describe("equals", () => {
  test("正常的 equals 判断", () => {
    expect(equals(1, 1)).toBeTruthy();
    expect(equals("1", 1)).toBeTruthy();
    expect(equals("", "")).toBeTruthy();
  });

  test("非正常的 equals 判断", () => {
    expect(equals(1, 2)).toBeFalsy();
    expect(equals(0, 0, 1)).toBeFalsy();
    expect(equals(1)).toBeFalsy();
    expect(equals()).toBeFalsy();
    expect(equals("abc", "ABC")).toBeFalsy();
  });
});
