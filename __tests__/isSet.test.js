import { describe, expect, test } from "@jest/globals";

import { isSet } from "../src/index";

describe("isSet", () => {
  test("正常的值", () => {
    expect(isSet(new Set())).toBeTruthy();
  });

  test("非正常的值", () => {
    expect(isSet("0")).toBeFalsy();
    expect(isSet(false)).toBeFalsy();
    expect(isSet("undefined")).toBeFalsy();
  });
});
