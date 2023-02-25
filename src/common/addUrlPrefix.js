import { isEmpty, isString } from "./isTypes";
import { joinPathNoResolve } from "./joinPathNoResolve";

export const addUrlPrefix = (url, prefix = "/") => {
  if (
    isEmpty(url) ||
    isEmpty(prefix) ||
    !isString(url) ||
    !isString(prefix) ||
    url.startsWith(prefix)
  )
    return url;

  return joinPathNoResolve(prefix, url);
};
