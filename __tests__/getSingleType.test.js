import { describe, expect, test } from "@jest/globals";

import { getSingleType } from "../src/index";

describe("getSingleType", () => {
  test("getSingleType 内容值", () => {
    expect(getSingleType(1)).toBe("number");
    expect(getSingleType("1")).toBe("string");
    expect(getSingleType(true)).toBe("boolean");
    expect(getSingleType([])).toBe("array");
    expect(getSingleType({})).toBe("object");
    expect(getSingleType(new Map())).toBe("map");
    expect(getSingleType(new Set())).toBe("set");
    expect(getSingleType(null)).toBe("null");
    expect(getSingleType(undefined)).toBe("undefined");
    expect(getSingleType(Symbol())).toBe("symbol");
  });
});
