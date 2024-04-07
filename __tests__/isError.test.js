import { describe, expect, test } from "@jest/globals";

import { isError } from "../src/index";

describe("isError", () => {
  test("正常的值", () => {
    expect(isError(new Error())).toBeTruthy();
  });

  test("非正常的值", () => {
    expect(isError(0)).toBeFalsy();
    expect(isError("")).toBeFalsy();
  });
});
