import { describe, expect, test } from "@jest/globals";

import { isRegExp } from "../src/index";

describe("isRegExp", () => {
  test("正常的值", () => {
    expect(isRegExp(new RegExp("a"))).toBeTruthy();
    expect(isRegExp(/a/gi)).toBeTruthy();
  });

  test("非正常的值", () => {
    expect(isRegExp("0")).toBeFalsy();
    expect(isRegExp(false)).toBeFalsy();
    expect(isRegExp("undefined")).toBeFalsy();
  });
});
