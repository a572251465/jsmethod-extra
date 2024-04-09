import { isUndefined } from "./isUndefined";
import { isNull } from "./isNull";

export const isBlankEmpty = (value: unknown): value is boolean =>
  isUndefined(value) || isNull(value) || value === "";
