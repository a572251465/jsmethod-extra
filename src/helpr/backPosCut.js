import { isEmpty, isNumber, isString, isUndefined } from "./isTypes";

export const backPosCut = (value, pos, len) => {
  if (!isString(value) || isEmpty(value)) return value;
  // 设置默认值
  if (isUndefined(len)) len = value.length;
  if (!isNumber(pos) || !isNumber(len)) return value;
  if (len <= 0) return "";

  const valueLen = value.length;
  if (pos < 0) {
    pos = 0 - pos - 1;
  } else {
    pos = valueLen - pos;
  }

  // 下标越界
  if (pos > valueLen - 1) return "";
  if (pos < 0) return value.slice(0, len);
  return value.slice(pos, pos + len);
};
