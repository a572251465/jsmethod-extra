import { describe, expect, test } from "@jest/globals";

import { timeFormatting, TimeType } from "../src/index";

const baseTime = "2023/05/15 17:09:09";

describe("timeFormatting", () => {
  test("timeFormatting ~~ one", () => {
    expect(timeFormatting(baseTime, TimeType.ONE)).toBe("2023-05-15");
  });

  test("timeFormatting ~~ two", () => {
    expect(timeFormatting(baseTime, TimeType.TWO)).toBe("2023-05-15 17:09:09");
  });

  test("timeFormatting ~~ three", () => {
    expect(timeFormatting(baseTime, TimeType.THREE)).toBe("2023-05-15 17:09");
  });

  test("timeFormatting ~~ FOUR", () => {
    expect(timeFormatting(baseTime, TimeType.FOUR)).toBe("2023/05/15");
  });

  test("timeFormatting ~~ FIVE", () => {
    expect(timeFormatting(baseTime, TimeType.FIVE)).toBe("2023/05/15 17:09:09");
  });

  test("timeFormatting ~~ SIX", () => {
    expect(timeFormatting(baseTime, TimeType.SIX)).toBe("2023/05/15 17:09");
  });

  test("timeFormatting ~~ SEVEN", () => {
    expect(timeFormatting(baseTime, TimeType.SEVEN)).toBe("2023年05月15日");
  });

  test("timeFormatting ~~ EIGHT", () => {
    expect(timeFormatting(baseTime, TimeType.EIGHT)).toBe(
      "2023年05月15日 17时09分09秒"
    );
  });

  test("timeFormatting ~~ NINE", () => {
    expect(timeFormatting(baseTime, TimeType.NINE)).toBe(
      "2023年05月15日 17时09分"
    );
  });

  test("timeFormatting ~~ TEN", () => {
    expect(timeFormatting(baseTime, TimeType.TEN)).toBe(
      "2023年05月15日 17:09:09"
    );
  });

  test("timeFormatting ~~ ELEVEN", () => {
    expect(timeFormatting(baseTime, TimeType.ELEVEN)).toBe(
      "2023年05月15日 17:09"
    );
  });

  test("timeFormatting ~~ TWELVE", () => {
    expect(timeFormatting(baseTime, TimeType.TWELVE)).toBe("2023年05月");
  });

  test("timeFormatting ~~ THIRTEEN", () => {
    expect(timeFormatting(baseTime, TimeType.THIRTEEN)).toBe("05月15日");
  });

  test("timeFormatting ~~ FOURTEEN", () => {
    expect(timeFormatting(baseTime, TimeType.FOURTEEN)).toBe(
      "05月15日 17时09分09秒"
    );
  });

  test("timeFormatting ~~ FIFTEEN", () => {
    expect(timeFormatting(baseTime, TimeType.FIFTEEN)).toBe(
      "05月15日 17时09分"
    );
  });

  test("timeFormatting ~~ SIXTEEN", () => {
    expect(timeFormatting(baseTime, TimeType.SIXTEEN)).toBe(
      "05月15日 17:09:09"
    );
  });

  test("timeFormatting ~~ SEVENTEEN", () => {
    expect(timeFormatting(baseTime, TimeType.SEVENTEEN)).toBe("05月15日 17:09");
  });

  test("timeFormatting ~~ only one params", () => {
    expect(timeFormatting(TimeType.TWELVE)).toBe("2023年06月");
  });
});
