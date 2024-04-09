import { describe, expect, test } from "@jest/globals";

import { isBlankEmpty } from "../src/index";

describe("isBlankEmpty", () => {
  test("正常的 isBlankEmpty 判断", () => {
    expect(isBlankEmpty(null)).toBeTruthy();
    expect(isBlankEmpty(undefined)).toBeTruthy();
    expect(isBlankEmpty("")).toBeTruthy();
  });

  test("非正常的 isBlankEmpty 判断", () => {
    expect(isBlankEmpty(0)).toBeFalsy();
    expect(isBlankEmpty([])).toBeFalsy();
    expect(isBlankEmpty("1")).toBeFalsy();
  });
});
