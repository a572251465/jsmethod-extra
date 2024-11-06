import { isString } from "./isString";
import { isEmpty } from "./isEmpty";
import { equals } from "./equals";

/**
 * @description 拿到文件后缀
 * @param split 分隔符
 * @author lihh
 * @param name 传递的分割值
 */
export function getExtName(name: string, split = ".") {
  if (!isString(name) || isEmpty(name)) {
    return name;
  }

  const len = name.length;
  let idx = len - 1;

  for (; idx >= 0; idx -= 1) {
    if (equals(name.charAt(idx), split)) {
      break;
    }
  }

  return name.substring(idx + 1);
}
