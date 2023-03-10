export const isEmpty = (value) => !value;
export const isString = (value) => typeof value === "string";
export const isFunction = (value) => typeof value === "function";
export const isNumber = (value) => typeof value === "number";
export const isUndefined = (value) => typeof value === "undefined";
export const isArray = (value) => Array.isArray(value);
export const isObject = (value) => !isEmpty(value) && typeof value === "object";
