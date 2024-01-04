import { isEmpty } from "./isEmpty";
import { getSingleType } from "./getTypes";

export const commonObj = {};
export const commonHandle = (value: unknown, type: string) =>
  isEmpty(value) ? false : getSingleType(value) === type;

/**
 * 返回26个英文字母 大写
 *
 * @author lihh
 */
export function getAlphabet() {
  const alphabet: string[] = [];
  // 获取字母'A'的Unicode编码
  const startCharCode = "A".charCodeAt(0);

  for (let i = 0; i < 26; i++) {
    // 根据Unicode编码获取字母
    const letter = String.fromCharCode(startCharCode + i);
    // 将字母添加到数组中
    alphabet.push(letter);
  }

  return alphabet;
}
