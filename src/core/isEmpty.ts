import { isUndefined } from "./isUndefined";
import { isNull } from "./isNull";
import { isEmptyString } from "./isEmptyString";
import { isArray } from "./isArray";

export const isEmpty = (value: unknown): value is boolean =>
  isUndefined(value) ||
  isNull(value) ||
  isEmptyString(value) ||
  (isArray(value) && value.length === 0);
