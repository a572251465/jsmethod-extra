import { describe, expect, test } from "@jest/globals";

import { valueOrDefault } from "../src/index";

describe("valueOrDefault", () => {
  test("正常的 valueOrDefault 判断", () => {
    expect(valueOrDefault(undefined, "1")).toBe("1");
    expect(valueOrDefault("2", "3")).toBe("2");
    expect(valueOrDefault(null, {})).toStrictEqual({});
    expect(valueOrDefault(null, undefined)).toBe(undefined);
  });
});
