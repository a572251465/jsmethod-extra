import { isPlainObject } from "./isPlainObject";

export const isHas = (obj: Record<string, unknown>, field: string): boolean =>
  isPlainObject(obj) && Object.prototype.hasOwnProperty.call(obj, field);
