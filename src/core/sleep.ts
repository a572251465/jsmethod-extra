import { isNumber } from "./isNumber";
import { isFunction } from "./isFunction";

export const sleep = (
  millisecond?: number,
  callback?: () => void
): Promise<void> => {
  if (!isNumber(millisecond)) millisecond = 1000;

  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve();
      clearTimeout(timer);

      if (isFunction(callback)) callback();
    }, millisecond);
  });
};
