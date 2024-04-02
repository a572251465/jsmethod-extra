import { isString } from "./isString";
import { equals } from "./equals";

export function isUpperCase(value: unknown) {
  return isString(value) && equals(value, value.toUpperCase());
}
