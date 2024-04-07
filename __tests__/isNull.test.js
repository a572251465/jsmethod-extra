import { describe, expect, test } from "@jest/globals";

import { isNull } from "../src/index";

describe("isNull", () => {
  test("正常的值", () => {
    expect(isNull(null)).toBeTruthy();
    expect(isNull("null")).toBeTruthy();
  });

  test("非正常的值", () => {
    expect(isNull(0)).toBeFalsy();
    expect(isNull("")).toBeFalsy();
    expect(isNull("undefined")).toBeFalsy();
  });
});
