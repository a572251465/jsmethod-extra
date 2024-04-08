import { describe, expect, test } from "@jest/globals";

import { addPrefix } from "../src/index";

describe("addPrefix", () => {
  test("正常的 addPrefix 判断", () => {
    expect(addPrefix("/test", "/api")).toBe("/api/test");
    expect(addPrefix("/getUser", "/")).toBe("/getUser");
    expect(addPrefix("a=1", "b=2", "&")).toBe("b=2&a=1");
  });

  test("非正常的 addPrefix 判断", () => {
    expect(addPrefix(null)).toBe(null);
    expect(addPrefix("/test")).toBe("/test");
    expect(addPrefix("/test", "11", null)).toBe("/test");
  });
});
