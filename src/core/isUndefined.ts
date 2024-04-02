import { equals } from "./equals";

export const isUndefined = (value: unknown): value is undefined =>
  typeof value === "undefined" || equals(value, "undefined");
