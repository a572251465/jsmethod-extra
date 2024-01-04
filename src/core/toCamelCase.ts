import { isEmpty } from "./isEmpty";
import { isString } from "./isString";
import { equals } from "./equals";

/**
 * 将以指定符号 为分割的字符串 转换为驼峰命令法
 *
 * @param charSequence
 * @param symbols
 */
export function toCamelCase(charSequence: string, symbols = "_") {
  if (isEmpty(charSequence) || !isString(charSequence) || isEmpty(symbols))
    return "";

  let newCharSequence = "";
  let isAfterSymbols = false;

  for (let i = 0; i < charSequence.length; i++) {
    const char = charSequence[i];

    if (equals(char, symbols)) {
      isAfterSymbols = true;
      continue;
    }

    newCharSequence += isAfterSymbols ? char.toUpperCase() : char;
    isAfterSymbols = false;
  }

  return newCharSequence;
}
