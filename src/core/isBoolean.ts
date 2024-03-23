import { equals } from "./equals";
import { getSingleType } from "./getTypes";

export const isBoolean = (value: unknown) =>
  equals(getSingleType(value), "boolean") ||
  ["true", "false"].includes(value as string);
