import { describe, expect, test } from "@jest/globals";
import { isHas } from "../src/index";

const person = { name: "lihh", age: 20 };
describe("isHas", () => {
  test("isHas ~~ normal", () => {
    expect(isHas(person, "name")).toBeTruthy();
    expect(isHas(person, "age")).toBeTruthy();
    expect(isHas(person, "address")).toBeFalsy();
  });

  test("isHas ~~ null", () => {
    expect(isHas(null, "name")).toBeFalsy();
    expect(isHas(null, "age")).toBeFalsy();
    expect(isHas(null, "address")).toBeFalsy();

    expect(isHas(person, null)).toBeFalsy();
  });

  test("isHas ~~ undefined", () => {
    expect(isHas(undefined, "name")).toBeFalsy();
    expect(isHas(undefined, "age")).toBeFalsy();
    expect(isHas(undefined, "address")).toBeFalsy();

    expect(isHas(person, undefined)).toBeFalsy();
  });

  test("isHas ~~ number", () => {
    expect(isHas(1, "name")).toBeFalsy();
    expect(isHas(person, 1)).toBeFalsy();
  });

  test("isHas ~~ boolean", () => {
    expect(isHas(true, "name")).toBeFalsy();
    expect(isHas(person, true)).toBeFalsy();
  });

  test("isHas ~~ other", () => {
    expect(isHas(["1"], 0)).toBeFalsy();
    expect(isHas({}, "age")).toBeFalsy();
  });
});
