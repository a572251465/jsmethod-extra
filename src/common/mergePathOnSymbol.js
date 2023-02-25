import { isEmpty, isString } from "./isTypes";
import { joinPathNoResolve } from "./joinPathNoResolve";

export const mergePathOnSymbol = (sign, ...args) => {
  if (args.length === 0) return "";
  if (isEmpty(sign)) return joinPathNoResolve(...args);

  return args.reduce((memo, curr) => {
    if (!isString(curr)) return memo;
    if (isEmpty(memo)) return curr;
    if (isEmpty(curr)) return memo;

    if (memo.endsWith(sign)) memo = memo.slice(0, memo.length - sign.length);
    if (!curr.startsWith(sign)) curr = joinPathNoResolve(sign, curr);

    return joinPathNoResolve(memo, curr);
  }, "");
};
