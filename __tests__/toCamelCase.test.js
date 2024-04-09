import { describe, expect, test } from "@jest/globals";
import { toCamelCase } from "../src";

describe("StrUtil.toCamelCase", () => {
  test("case 001", () => {
    expect(toCamelCase("user_name")).toEqual("userName");
  });

  test("case 002", () => {
    expect(toCamelCase("First_name")).toEqual("FirstName");
  });

  test("case 003", () => {
    expect(toCamelCase("")).toEqual("");
  });

  test("case 004", () => {
    expect(toCamelCase("111", null)).toEqual("");
  });

  test("case 005", () => {
    expect(toCamelCase("111")).toEqual("111");
  });

  test("case 006", () => {
    expect(toCamelCase("nameUser")).toEqual("nameUser");
  });
});
