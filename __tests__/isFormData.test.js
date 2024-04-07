import { describe, expect, test } from "@jest/globals";

import { isFormData } from "../src/index";

describe("isFormData", () => {
  test("正常的值", () => {
    expect(isFormData(new FormData())).toBeTruthy();
  });

  test("非正常的值", () => {
    expect(isFormData(0)).toBeFalsy();
    expect(isFormData("")).toBeFalsy();
  });
});
