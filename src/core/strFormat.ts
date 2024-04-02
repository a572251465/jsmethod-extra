import { isString } from "./isString";
import { isEmpty } from "./isEmpty";
import { valueOrDefault } from "./valueOrDefault";

export function strFormat(str: string, ...args: string[]) {
  if (!isString(str) || !str.includes("%s") || isEmpty(args)) return str;

  let index = 0;
  return str.replace(/%s/gi, () => valueOrDefault(args[index++], "%s"));
}
