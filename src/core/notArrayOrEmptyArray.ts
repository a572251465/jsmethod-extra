import { isArray } from "./isArray";
import { isEmpty } from "./isEmpty";

export function notArrayOrEmptyArray(value: unknown) {
  return !isArray(value) || isEmpty(value);
}
