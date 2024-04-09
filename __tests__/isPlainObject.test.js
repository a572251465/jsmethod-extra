import { describe, expect, test } from "@jest/globals";

import { isPlainObject } from "../src/index";

describe("isPlainObject", () => {
  test("isPlainObject 正常值", () => {
    expect(isPlainObject({})).toBeTruthy();
    expect(isPlainObject(new Object())).toBeTruthy();
  });

  test("isPlainObject 非正常值", () => {
    expect(isPlainObject([])).toBeFalsy();
    expect(isPlainObject(1)).toBeFalsy();
    expect(isPlainObject(true)).toBeFalsy();
  });
});
