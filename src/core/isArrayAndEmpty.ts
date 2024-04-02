import { isArray } from "./isArray";
import { isEmpty } from "./isEmpty";

export function isArrayAndEmpty(value: unknown): value is boolean {
  return isArray(value) && isEmpty(value);
}
