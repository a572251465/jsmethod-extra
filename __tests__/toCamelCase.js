import { describe, expect, test } from "@jest/globals";
import { StrUtil } from "../src";

describe("StrUtil.toCamelCase", () => {
  test("case 001", () => {
    expect(StrUtil.toCamelCase("user_name")).toEqual("userName");
  });

  test("case 002", () => {
    expect(StrUtil.toCamelCase("First_name")).toEqual("FirstName");
  });

  test("case 003", () => {
    expect(StrUtil.toCamelCase("")).toEqual("");
  });

  test("case 004", () => {
    expect(StrUtil.toCamelCase("111", null)).toEqual("");
  });

  test("case 005", () => {
    expect(StrUtil.toCamelCase("111")).toEqual("111");
  });
});
