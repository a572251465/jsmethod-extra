import { describe, expect, test } from "@jest/globals";

import { isBlankEmpty } from "../src/index";

describe("isEmpty", () => {
  test("is false", () => {
    expect(isBlankEmpty(false)).toBeTruthy();
  });

  test("is -1", () => {
    expect(isBlankEmpty(-1)).toBeTruthy();
  });
});
