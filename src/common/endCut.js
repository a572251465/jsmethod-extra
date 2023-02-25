import { isEmpty, isNumber } from "./isTypes";

export const endCut = (value, len) => {
  if (isEmpty(value)) return value;

  if (!isNumber(len) || len <= 0) return value;

  value = String(value);
  const valueLen = value.length;
  if (valueLen <= len) return value;

  return value.slice(0 - len);
};
