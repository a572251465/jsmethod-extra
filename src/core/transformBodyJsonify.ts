import { isString } from "./isString";

export function transformBodyJsonify(v: unknown): string {
  return isString(v) ? v : JSON.stringify(v);
}
