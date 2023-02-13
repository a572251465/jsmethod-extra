import { describe, expect, test } from "@jest/globals";
const { mergePathOnSymbol } = require("../src");

describe("function mergePathOnSymbol test", () => {
  test("params is empty", () => {
    expect(mergePathOnSymbol("/")).toBe("");
  });

  test("params is null", () => {
    expect(mergePathOnSymbol(null, null, null)).toBe("nullnull");
  });

  test("params is undefined", () => {
    expect(mergePathOnSymbol(undefined, undefined, undefined)).toBe(
      "undefinedundefined"
    );
  });

  test("params is empty array", () => {
    expect(mergePathOnSymbol("/", "")).toBe("");
    expect(mergePathOnSymbol("/", [], [])).toBe("");
  });

  test("params is normal value", () => {
    expect(mergePathOnSymbol("/", "a", "b", "c")).toBe("a/b/c");
    expect(mergePathOnSymbol("/", "/a", "/b", "/c", "/d")).toBe("/a/b/c/d");
    expect(mergePathOnSymbol("/", "111", "", "222", "33")).toBe("111/222/33");
    expect(
      mergePathOnSymbol("/", "https://12.12.12.12/", "/home", "/test", "d")
    ).toBe("https://12.12.12.12/home/test/d");
    expect(mergePathOnSymbol("///", "a///", "///b", "c", "d")).toBe(
      "a///b///c///d"
    );
  });
});
