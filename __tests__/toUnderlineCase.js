import { describe, expect, test } from "@jest/globals";

import { toUnderlineCase } from "../src/index";

describe("toUnderlineCase", () => {
  test("case 001", () => {
    expect(toUnderlineCase("userName")).toEqual("user_name");
  });

  test("case 002", () => {
    expect(toUnderlineCase("FirstName")).toEqual("first_name");
  });

  test("case 003", () => {
    expect(toUnderlineCase("")).toEqual("");
  });

  test("case 004", () => {
    expect(toUnderlineCase("111", null)).toEqual("");
  });

  test("case 005", () => {
    expect(toUnderlineCase("111")).toEqual("111");
  });
});
