import { describe, expect, test } from "@jest/globals";

import { isUndefined } from "../src/index";

describe("isUndefined", () => {
  test("正常的值", () => {
    expect(isUndefined(undefined)).toBeTruthy();
    expect(isUndefined("undefined")).toBeTruthy();
  });

  test("非正常的值", () => {
    expect(isUndefined(false)).toBeFalsy();
    expect(isUndefined(0)).toBeFalsy();
  });
});
