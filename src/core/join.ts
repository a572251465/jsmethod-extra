import { isEmpty } from "./isEmpty";
import { isString } from "./isString";

export function join(...args: unknown[]): string {
  if (isEmpty(args)) return "";

  return args.reduce((memo: string, curr) => {
    return memo + (isString(curr) ? (curr as string) : curr + "");
  }, "");
}
