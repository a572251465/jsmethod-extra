import { describe, expect, test } from "@jest/globals";
const { joinPathNoResolve } = require("../src");

describe("function joinPathNoResolve test", () => {
  test("params is null", () => {
    expect(joinPathNoResolve(null, null)).toBe("nullnull");
    expect(joinPathNoResolve("", "")).toBe("");
  });

  test("params is array", () => {
    expect(joinPathNoResolve([], [1, 2, 3])).toBe("1,2,3");
  });

  test("params is string", () => {
    expect(joinPathNoResolve("/", "test/001")).toBe("/test/001");
  });

  test("params is number", () => {
    expect(joinPathNoResolve(1, 2)).toBe("12");
  });

  test("params is object", () => {
    expect(joinPathNoResolve({}, {})).toBe("[object Object][object Object]");
  });

  test("params is function", () => {
    expect(
      joinPathNoResolve(
        () => {},
        () => {}
      )
    ).toBe("function () {}function () {}");
  });

  test("params is boolean", () => {
    expect(joinPathNoResolve(true, false)).toBe("truefalse");
  });
});
