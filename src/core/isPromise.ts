import { isPlainObject } from "./isPlainObject";
import { isFunction } from "./isFunction";

export function isPromise(value: object): boolean {
  return isPlainObject(value) && isFunction(value.then);
}
