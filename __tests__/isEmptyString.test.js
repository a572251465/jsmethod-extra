import { describe, expect, test } from "@jest/globals";

import { isEmptyString } from "../src/index";

describe("isEmptyString", () => {
  test("正常的 isEmptyString 判断", () => {
    expect(isEmptyString("")).toBeTruthy();
  });

  test("非正常的 isEmptyString 判断", () => {
    expect(isEmptyString(0)).toBeFalsy();
    expect(isEmptyString([])).toBeFalsy();
    expect(isEmptyString("1")).toBeFalsy();
    expect(isEmptyString(null)).toBeFalsy();
    expect(isEmptyString(undefined)).toBeFalsy();
  });
});
