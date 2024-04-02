import { isArray } from "./isArray";

export function isArrayAndNotEmpty(value: unknown): value is boolean {
  return isArray(value) && value.length > 0;
}
