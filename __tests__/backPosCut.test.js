import { describe, expect, test } from "@jest/globals";
const { backPosCut } = require("../src");

describe("function backPosCut test", () => {
  test("params is error value", () => {
    expect(backPosCut(123, 2, 1)).toBe(123);
    expect(backPosCut(null)).toBe(null);
    expect(backPosCut("123456", null, null)).toBe("123456");
    expect(backPosCut("123456", 2, null)).toBe("123456");
    expect(backPosCut("123456", 2, -1)).toBe("");
  });

  test("params is normal value", () => {
    expect(backPosCut("123456", 5)).toBe("23456");
    expect(backPosCut("123456", 2)).toBe("56");
    expect(backPosCut("123456", 2, 2)).toBe("56");
    expect(backPosCut("123456", 6, 2)).toBe("12");
    expect(backPosCut("123456", 4, 3)).toBe("345");
    expect(backPosCut("123456", -2, 2)).toBe("23");
    expect(backPosCut("1234", -6, 2)).toBe("");
    expect(backPosCut("1234", -4, 0)).toBe("");
    expect(backPosCut("1234", -4, 1)).toBe("4");
  });
});
