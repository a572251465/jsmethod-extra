import { isEmpty } from "./isEmpty";
import { getSingleType } from "./getTypes";

export const commonObj = {};
export const commonHandle = (value: unknown, type: string) =>
  isEmpty(value) ? false : getSingleType(value) === type;
