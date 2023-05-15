import { isString } from "./isString";
import { isDate } from "./isDate";
import { isNotEmpty } from "./isNotEmpty";
import { isBlankEmpty } from "./isBlankEmpty";
import { equals } from "./equals";

const enum TimeType {
  ONE = "YYYY-MM-DD",
  TWO = "YYYY-MM-DD HH:mm:ss",
  THREE = "YYYY-MM-DD HH:mm",
  FOUR = "YYYY/MM/DD",
  FIVE = "YYYY/MM/DD HH:mm:ss",
  SIX = "YYYY/MM/DD HH:mm",
  SEVEN = "YYYY年MM月DD日",
  EIGHT = "YYYY年MM月DD日 HH时mm分ss秒",
  NINE = "YYYY年MM月DD日 HH时mm分",
  TEN = "YYYY年MM月DD日 HH:mm:ss",
  ELEVEN = "YYYY年MM月DD日 HH:mm",
  TWELVE = "YYYY年MM月",
  THIRTEEN = "MM月DD日",
  FOURTEEN = "MM月DD日 HH时mm分ss秒",
  FIFTEEN = "MM月DD日 HH时mm分",
  SIXTEEN = "MM月DD日 HH:mm:ss",
  SEVENTEEN = "MM月DD日 HH:mm",
}

const allTimeTypes = [
  TimeType.ONE,
  TimeType.TWO,
  TimeType.THREE,
  TimeType.FOUR,
  TimeType.FIVE,
  TimeType.SIX,
  TimeType.SEVEN,
  TimeType.EIGHT,
  TimeType.NINE,
  TimeType.TEN,
  TimeType.ELEVEN,
  TimeType.TWELVE,
  TimeType.THIRTEEN,
  TimeType.FOURTEEN,
  TimeType.FIFTEEN,
  TimeType.SIXTEEN,
  TimeType.SEVENTEEN,
];

const padStart = (value: number, len = 2): string =>
  String(value).padStart(len, "0");

function timeFormatting(date: string, type: TimeType): string;
function timeFormatting(date: Date, type: TimeType): string;
function timeFormatting(date: TimeType): string;
function timeFormatting(
  date: string | Date | TimeType,
  type?: TimeType
): string {
  if (allTimeTypes.includes(date as TimeType)) {
    type = date as TimeType;
    date = new Date();
  }
  if (!isString(date) && !isDate(date))
    throw new Error("first params type is string or date or TimeType");
  if (isBlankEmpty(type)) throw new Error("second params type is not empty");
  if (isNotEmpty(type) && !allTimeTypes.includes(type!))
    throw new Error("second params type must be TimeType");

  if (isString(date)) {
    try {
      date = new Date(date);
    } catch (e) {
      date = new Date();
      console.error(e);
    }
  }

  const time = date as Date;
  const year = time.getFullYear() + "";
  const month = padStart(time.getMonth() + 1);
  const day = padStart(time.getDate());
  const hour = padStart(time.getHours());
  const minute = padStart(time.getMinutes());
  const second = padStart(time.getSeconds());

  const replaceRecords: Record<string, () => string> = {
    YYYY: () => year,
    MM: () => month,
    DD: () => day,
    HH: () => hour,
    mm: () => minute,
    ss: () => second,
  };

  let replaceStr = type as string;
  for (const key in replaceRecords) {
    const index = replaceStr.indexOf(key);
    if (equals(index, -1)) continue;
    replaceStr = replaceStr.replace(key, replaceRecords[key]());
  }
  return replaceStr;
}

export { timeFormatting, TimeType };
