import { describe, expect, test } from "@jest/globals";

import { isEmpty } from "../src/index";

describe("isEmpty", () => {
  test("正常的 isEmpty 判断", () => {
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty(0)).toBeTruthy();
    expect(isEmpty(-1)).toBeTruthy();
    expect(isEmpty("")).toBeTruthy();
  });

  test("非正常的 isEmpty 判断", () => {
    expect(isEmpty("1")).toBeFalsy();
    expect(isEmpty(["1"])).toBeFalsy();
    expect(isEmpty({})).toBeFalsy();
  });
});
