import { describe, expect, test } from "@jest/globals";
const { endCut } = require("../src");

describe("function endCut test", () => {
  test("params is null", () => {
    expect(endCut(null, null)).toBe(null);
    expect(endCut("", "")).toBe("");
  });

  test("params is normal value", () => {
    expect(endCut("", -10)).toBe("");
    expect(endCut("123", 0)).toBe("123");
    expect(endCut("123", -1)).toBe("123");
    expect(endCut("123", 100)).toBe("123");
    expect(endCut("123", 2)).toBe("23");
    expect(endCut("123", "a")).toBe("123");
  });
});
