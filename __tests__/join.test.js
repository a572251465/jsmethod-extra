import { describe, expect, test } from "@jest/globals";

import { join } from "../src/index";

describe("join", () => {
  test("正常的值", () => {
    expect(join(null, "11", "22", {})).toBe("null1122[object Object]");
    expect(join(undefined, undefined)).toBe("undefinedundefined");
    expect(join(true, [1, 2, 3])).toBe("true1,2,3");
    expect(join(1, undefined, [1, 2])).toBe("1undefined1,2");
  });
});
