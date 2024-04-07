import { equals } from "./equals";

export const isNull = (value: unknown): value is null =>
  value === null || equals("null", value);
