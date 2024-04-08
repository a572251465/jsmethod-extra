import { describe, expect, test } from "@jest/globals";

import { isEmptyObject } from "../src/index";

describe("isEmptyObject", () => {
  test("正常的值", () => {
    expect(isEmptyObject({})).toBeTruthy();
    expect(isEmptyObject(new Object())).toBeTruthy();
  });

  test("非正常的值", () => {
    expect(isEmptyObject({ name: "name" })).toBeFalsy();
    expect(isEmptyObject(1)).toBeFalsy();
    expect(isEmptyObject(null)).toBeFalsy();
    expect(isEmptyObject(undefined)).toBeFalsy();
  });
});
