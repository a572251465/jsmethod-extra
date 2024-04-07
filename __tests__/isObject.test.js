import { describe, expect, test } from "@jest/globals";

import { isObject } from "../src/index";

describe("isObject", () => {
  test("正常的值", () => {
    expect(isObject({})).toBeTruthy();
    expect(isObject(new Object())).toBeTruthy();
  });

  test("非正常的值", () => {
    expect(isObject("0")).toBeFalsy();
    expect(isObject(false)).toBeFalsy();
    expect(isObject("undefined")).toBeFalsy();
  });
});

