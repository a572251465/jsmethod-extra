import { describe, expect, test } from "@jest/globals";

import { isMap } from "../src/index";

describe("isMap", () => {
  test("正常的值", () => {
    expect(isMap(new Map())).toBeTruthy();
  });

  test("非正常的值", () => {
    expect(isMap(0)).toBeFalsy();
    expect(isMap("")).toBeFalsy();
    expect(isMap({})).toBeFalsy();
  });
});
