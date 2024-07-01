import { isFunction } from "./isFunction";
import { isObject } from "./isObject";

export function isPromise(value: object): boolean {
  return isObject(value) && isFunction(value.then);
}
