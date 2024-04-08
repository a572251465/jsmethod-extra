import { isEmpty } from "./isEmpty";

export const valueOrDefault = <T, K>(
  value: T,
  replaceValue: K,
  judgeFn = isEmpty
) => (judgeFn(value) ? replaceValue : value);
