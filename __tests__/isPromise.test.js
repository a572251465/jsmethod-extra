import { describe, expect, test } from "@jest/globals";

import { isPromise } from "../src/index";

describe("isPromise", () => {
  test("正常的值", () => {
    const p = new Promise(resolve => resolve())
    expect(isPromise(p)).toBeTruthy();
  });

  test("非正常的值", () => {
    expect(isPromise("0")).toBeFalsy();
    expect(isPromise(false)).toBeFalsy();
    expect(isPromise("undefined")).toBeFalsy();
  });
});

