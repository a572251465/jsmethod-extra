import { isString } from "./isString";
import { equals } from "./equals";

export function equalsIgnoreCase(v1: unknown, v2: unknown) {
  return !isString(v1) || !isString(v2)
    ? equals(v1, v2)
    : equals(v1.toLowerCase(), v2.toLowerCase());
}
