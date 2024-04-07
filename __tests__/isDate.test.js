import { describe, expect, test } from "@jest/globals";

import { isDate } from "../src/index";

describe("isDate", () => {
  test("正常的值", () => {
    expect(isDate(new Date())).toBeTruthy();
  });

  test("非正常的值", () => {
    expect(isDate(0)).toBeFalsy();
    expect(isDate("")).toBeFalsy();
  });
});
