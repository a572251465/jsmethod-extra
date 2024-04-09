import { describe, expect, test } from "@jest/globals";

import { isNotEmpty } from "../src/index";

describe("isNotEmpty", () => {
  test("正常的 isNotEmpty 判断", () => {
    expect(isNotEmpty("1")).toBeTruthy();
    expect(isNotEmpty(["1"])).toBeTruthy();
    expect(isNotEmpty({})).toBeTruthy();
  });

  test("非正常的 isNotEmpty 判断", () => {
    expect(isNotEmpty(undefined)).toBeFalsy();
    expect(isNotEmpty(null)).toBeFalsy();
    expect(isNotEmpty([])).toBeFalsy();
    expect(isNotEmpty(0)).toBeFalsy();
    expect(isNotEmpty("")).toBeFalsy();
  });
});
