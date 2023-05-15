export const enum TimeType {
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

export declare function timeFormatting(date: string, type: TimeType): string;
export declare function timeFormatting(date: Date, type: TimeType): string;
export declare function timeFormatting(date: TimeType): string;
