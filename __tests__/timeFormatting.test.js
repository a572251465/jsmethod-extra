import { describe, expect, test } from "@jest/globals";

import { timeFormatting, TimeType } from "../src/index";

const currentTime = "1712647460644";

describe("timeFormatting", () => {
  test("正常的 timeFormatting 判断", () => {
    expect(timeFormatting(currentTime, TimeType.ONE)).toBe("2024-04-09");
    expect(timeFormatting(currentTime, TimeType.THREE)).toBe(
      "2024-04-09 15:24"
    );
    expect(timeFormatting(currentTime, TimeType.FOUR)).toBe("2024/04/09");
    expect(timeFormatting(currentTime, TimeType.SEVEN)).toBe("2024年04月09日");
    expect(timeFormatting(currentTime, TimeType.ELEVEN)).toBe(
      "2024年04月09日 15:24"
    );
  });
});
