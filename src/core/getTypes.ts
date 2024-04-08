import { isArray } from "./isArray";
import { commonObj } from "./helper";
import { isEmpty } from "./isEmpty";

export const getTypes = (value: unknown | unknown[]): string[] => {
  if (!isArray(value)) value = [value];
  return (value as unknown[]).map((item) => {
    const type = commonObj.toString.call(item).toLowerCase();
    const execs = /\s+([a-z]+)/gi.exec(type);
    return execs ? execs[1] : "";
  });
};

export const getSingleType = (value: unknown): string => {
  const type = commonObj.toString.call(value).toLowerCase();
  const execs = /\s+([a-z]+)/gi.exec(type);
  return execs ? execs[1] : "";
};
