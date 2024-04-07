import { describe, expect, test } from "@jest/globals";

import { isBoolean } from "../src/index";

describe("isBoolean", () => {
  test("正常的值", () => {
    expect(isBoolean(true)).toBeTruthy();
    expect(isBoolean("true")).toBeTruthy();
    expect(isBoolean(false)).toBeTruthy();
    expect(isBoolean("false")).toBeTruthy();
  });

  test("非正常的值", () => {
    expect(isBoolean(0)).toBeFalsy();
    expect(isBoolean("")).toBeFalsy();
  });
});
