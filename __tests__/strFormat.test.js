import { describe, expect, test } from "@jest/globals";
import { strFormat } from "../src";

describe("strFormat", () => {
  test("normal ~~ 001", () => {
    const str = "%s, 我是%s, 我就是要%s";
    expect(strFormat(str, "hello", "lihh", "eat")).toBe(
      `hello, 我是lihh, 我就是要eat`
    );
  });

  test("normal ~~ 002", () => {
    const str = "我是test, 我就是要%s";
    expect(strFormat(str, "eat")).toBe(`我是test, 我就是要eat`);
  });

  test("normal ~~ 003", () => {
    const str = "%s, 我是test, 我就是要eat";
    expect(strFormat(str, "hello")).toBe(`hello, 我是test, 我就是要eat`);
  });

  test("error ~~ 001", () => {
    const str = "%s, 我是test, 我就是要eat";
    expect(strFormat(str)).toBe(str);
  });

  test("error ~~ 002", () => {
    const str = "%s, 我是test, 我就是要eat%s";
    expect(strFormat(str, "hello")).toBe("hello, 我是test, 我就是要eat%s");
  });

  test("error ~~ 003", () => {
    expect(strFormat(null)).toBe(null);
  });
});
