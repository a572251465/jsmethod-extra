import { isEmpty } from "./isEmpty";
import { equals } from "./equals";
import { isPlainObject } from "./isPlainObject";
import { isString } from "./isString";

const queryURLParams = <T extends keyof any, K = string>(
  url: string
): Record<T, K> => {
  if (
    isEmpty(url) &&
    !equals(typeof window, "undefined") &&
    isPlainObject(window)
  )
    url = window.location.href;
  if (isEmpty(url) || !isString(url) || equals(url.indexOf("?"), -1))
    return {} as Record<T, K>;

  const obj: Record<T, K> = {} as Record<T, K>;
  url.replace(/([^?&=]+)=([^?&=]+)/g, (_, key, value) => {
    obj[key as T] = value;
    return "";
  });
  return obj;
};

export { queryURLParams };
