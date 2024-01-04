import { getAlphabet } from "./helper";
import { isEmpty } from "./isEmpty";
import { isString } from "./isString";

// 拿到26个英文字母
const capitalizationEnglishWorld = getAlphabet();

/**
 * 将某个字符串 转换为以特殊符号为分割的字符串
 *
 * @param charSequence 字符串
 * @param symbols 传递的符号 默认是下划线
 */
export function toUnderlineCase(charSequence: string, symbols = "_") {
  if (isEmpty(charSequence) || !isString(charSequence) || isEmpty(symbols))
    return "";

  let newCharSequence = "";
  for (let i = 0; i < charSequence.length; i++) {
    const char = charSequence[i];

    if (i === 0) {
      newCharSequence += char.toLowerCase();
      continue;
    }

    if (capitalizationEnglishWorld.includes(char))
      newCharSequence += `${symbols}`;

    newCharSequence += char.toLowerCase();
  }

  return newCharSequence;
}
