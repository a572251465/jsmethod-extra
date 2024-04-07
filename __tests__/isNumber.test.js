import { describe, expect, test } from "@jest/globals";

import { isNumber } from "../src/index";

describe("isNumber", () => {
  test("正常的值", () => {
    expect(isNumber(0)).toBeTruthy();
    expect(isNumber(1)).toBeTruthy();
  });

  test("非正常的值", () => {
    expect(isNumber("0")).toBeFalsy();
    expect(isNumber(false)).toBeFalsy();
    expect(isNumber("undefined")).toBeFalsy();
  });
});
