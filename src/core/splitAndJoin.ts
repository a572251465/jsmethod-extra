import { isEmpty } from "./isEmpty";
import { equals } from "./equals";
import { join } from "./join";

export function splitAndJoin(splitSymbol: string, ...args: unknown[]): string {
  if (isEmpty(splitSymbol) || isEmpty(args)) return "";
  const all = args.reduce((memo: Array<unknown>, curr, index) => {
    memo.push(curr);
    if (!equals(index, args.length - 1)) memo.push(splitSymbol);
    return memo;
  }, []);
  return join(...all);
}
