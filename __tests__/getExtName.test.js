import { describe, expect, test } from "@jest/globals";

import { getExtName } from "../src/index";

describe("getExtName", () => {
  test("getExtName", () => {
    expect(getExtName("1111")).toBe("1111");
    expect(getExtName("file.text")).toBe("text");
    expect(getExtName("..")).toBe("");
    expect(getExtName("file.text", ",")).toBe("file.text");
  });
});
