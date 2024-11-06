import { describe, expect, test } from "@jest/globals";

import { transformBodyJsonify } from "../src/index";

describe("transformBodyJsonify", () => {
  test("transformBodyJsonify", () => {
    expect(transformBodyJsonify("1111")).toBe("1111");
    expect(transformBodyJsonify({})).toBe("{}");
  });
});
