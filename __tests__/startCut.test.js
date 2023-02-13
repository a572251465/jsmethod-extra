import { describe, expect, test } from "@jest/globals";
const { startCut } = require("../src");

describe("function startCut test", () => {
  test("params is null", () => {
    expect(startCut(null, null)).toBe(null);
    expect(startCut("", "")).toBe("");
  });

  test("params is normal value", () => {
    expect(startCut("", -10)).toBe("");
    expect(startCut("123", 0)).toBe("123");
    expect(startCut("123", -1)).toBe("123");
    expect(startCut("123", 100)).toBe("123");
    expect(startCut("123", 2)).toBe("12");
    expect(startCut("123", "a")).toBe("123");
  });
});
