import { isUndefined } from "./isUndefined";
import { isNull } from "./isNull";
import { isEmptyString } from "./isEmptyString";
import { isArray } from "./isArray";
import { isNumber } from "./isNumber";
import { equals } from "./equals";

export const isEmpty = (value: unknown): value is boolean =>
  isUndefined(value) ||
  isNull(value) ||
  isEmptyString(value) ||
  (isNumber(value) && (equals(value, 0) || equals(value, -1))) ||
  (isArray(value) && value.length === 0);
