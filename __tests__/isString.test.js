import { describe, expect, test } from "@jest/globals";

import { isString } from "../src/index";

describe("isString", () => {
  test("正常的值", () => {
    expect(isString("0")).toBeTruthy();
    expect(isString("")).toBeTruthy();
  });

  test("非正常的值", () => {
    expect(isString(false)).toBeFalsy();
    expect(isString(0)).toBeFalsy();
    expect(isString(new String())).toBeFalsy();
  });
});
