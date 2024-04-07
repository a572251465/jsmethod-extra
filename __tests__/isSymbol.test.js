import { describe, expect, test } from "@jest/globals";

import { isSymbol } from "../src/index";

describe("isSymbol", () => {
  test("正常的值", () => {
    expect(isSymbol(Symbol())).toBeTruthy();
  });

  test("非正常的值", () => {
    expect(isSymbol(false)).toBeFalsy();
    expect(isSymbol(0)).toBeFalsy();
  });
});

