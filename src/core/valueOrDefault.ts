import { isBlankEmpty } from "./isBlankEmpty";

export const valueOrDefault = <T, K>(
  value: T,
  replaceValue: K,
  judgeFn = isBlankEmpty
) => (judgeFn(value) ? replaceValue : value);
