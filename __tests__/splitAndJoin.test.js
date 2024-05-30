import { describe, expect, test } from "@jest/globals";

import { splitAndJoin } from "../src/index";

describe("splitAndJoin", () => {
  test("正常的值", () => {
    expect(splitAndJoin("/", "11", "22", "33")).toBe("11/22/33");
    expect(splitAndJoin("/", true, false, {})).toBe(
      "true/false/[object Object]"
    );
    expect(splitAndJoin("/", null, undefined, false)).toBe(
      "null/undefined/false"
    );
    expect(splitAndJoin(null)).toBe("");
    expect(splitAndJoin()).toBe("");
  });
});
