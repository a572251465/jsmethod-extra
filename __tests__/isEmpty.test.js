import { describe, expect, test } from "@jest/globals";

import { isEmpty } from "../src/index";

const emptyArr = [];
const notEmptyArr = ["1", "2"];

describe("isEmpty", () => {
  test("is empty arr", () => {
    expect(isEmpty(emptyArr)).toBeTruthy();
  });

  test("not empty arr", () => {
    expect(isEmpty(notEmptyArr)).toBeFalsy();
  });

  test("is number 0", () => {
    expect(isEmpty(0)).toBeTruthy();
  });

  test("is null", () => {
    expect(isEmpty(null)).toBeTruthy();
  });

  test("is undefined", () => {
    expect(isEmpty(undefined)).toBeTruthy();
  });

  test("is empty string", () => {
    expect(isEmpty("")).toBeTruthy();
  });

  test("is string 0", () => {
    expect(isEmpty("0")).toBeFalsy();
  });

  test("is normal value", () => {
    expect(isEmpty(10)).toBeFalsy();
  });
});
