import { describe, expect, test } from "@jest/globals";

import { isEmpty, isNotEmpty } from "../src/index";

const emptyArr = [];
const notEmptyArr = ["1", "2"];

describe("isEmpty", () => {
  test("is empty arr", () => {
    expect(isEmpty(emptyArr)).toBeTruthy();
    expect(isEmpty(notEmptyArr)).toBeFalsy();
  });
});

describe("isNotEmpty", () => {
  test("is not empty arr", () => {
    expect(isNotEmpty(emptyArr)).toBeFalsy();
    expect(isNotEmpty(notEmptyArr)).toBeTruthy();
  });
});
