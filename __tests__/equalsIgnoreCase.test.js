import { describe, expect, test } from "@jest/globals";
import { equalsIgnoreCase } from "../src";

describe("equalsIgnoreCase", () => {
  test("normal ~~ 001", () => {
    expect(equalsIgnoreCase("abc", "ABC")).toBeTruthy();
  });

  test("normal ~~ 002", () => {
    expect(equalsIgnoreCase(null, "ABC")).toBeFalsy();
  });
});
