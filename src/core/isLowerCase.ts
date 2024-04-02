import { isString } from "./isString";
import { equals } from "./equals";

export function isLowerCase(value: unknown) {
  return isString(value) && equals(value, value.toLowerCase());
}
