import { describe, expect, test } from "@jest/globals";
import { notArrayOrEmptyArray } from "../src";

describe("notArrayOrEmptyArray", () => {
  test("normal ~~ 001", () => {
    expect(notArrayOrEmptyArray([])).toBeTruthy();
  });

  test("normal ~~ 002", () => {
    expect(notArrayOrEmptyArray(["1"])).toBeFalsy();
  });
});
