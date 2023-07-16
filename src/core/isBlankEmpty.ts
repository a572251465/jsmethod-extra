import { isEmpty } from "./isEmpty";
import { equals } from "./equals";
import { isNumber } from "./isNumber";

export const isBlankEmpty = (value: unknown): value is boolean =>
  isEmpty(value) ||
  (isNumber(value) && equals(value, 0)) ||
  value === false ||
  (isNumber(value) && equals(value, -1));
