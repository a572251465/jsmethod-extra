import { describe, expect, test } from "@jest/globals";
import { StrUtils } from "../src";

describe("StrUtils.toCamelCase", () => {
  test("case 001", () => {
    expect(StrUtils.toCamelCase("user_name")).toEqual("userName");
  });

  test("case 002", () => {
    expect(StrUtils.toCamelCase("First_name")).toEqual("FirstName");
  });

  test("case 003", () => {
    expect(StrUtils.toCamelCase("")).toEqual("");
  });

  test("case 004", () => {
    expect(StrUtils.toCamelCase("111", null)).toEqual("");
  });

  test("case 005", () => {
    expect(StrUtils.toCamelCase("111")).toEqual("111");
  });
});
