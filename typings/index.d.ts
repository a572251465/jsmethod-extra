import type { addPrefix as IAddPrefix } from "./core/addPrefix";
import type { isArray as IIsArray } from "./core/isArray";
import type { isEmpty as IIEmpty } from "./core/isEmpty";
import type { isEmptyObject as IIsEmptyObject } from "./core/isEmptyObject";
import type { isEmptyString as IIsEmptyString } from "./core/isEmptyString";
import type { isFunction as IIsFunction } from "./core/isFunction";
import type { isNull as IIsNull } from "./core/isNull";
import type { isNumber as IIsNumber } from "./core/isNumber";
import type { isObject as IIsObject } from "./core/isObject";
import type { isPlainObject as IIsplainObject } from "./core/isPlainObject";
import type { isString as IIsString } from "./core/isString";
import type { isUndefined as IIsUndefined } from "./core/isUndefined";
import type { getTypes as IGetTypes } from "./core/getTypes";
import type { isDate as IIsDate } from "./core/isDate";
import type { isError as IIsError } from "./core/isError";
import type { isFormData as IIsFormData } from "./core/isFormData";
import type { isMath as IIsMath } from "./core/isMath";
import type { isRegExp as IIsRegExp } from "./core/isRegExp";
import type { isSymbol as IIsSymbol } from "./core/isSymbol";
import type { isMap as IIsMap } from "./core/isMap";
import type { isSet as IIsSet } from "./core/isSet";
import type { isFullObject as IIsFullObject } from "./core/isFullObject";
import type { equals as IEquals } from "./core/equals";
import type { isNotEmpty as IIsNotEmpty } from "./core/isNotEmpty";
import type { slice as ISlice } from "./core/slice";
import type { valueOrDefault as IValueOrDefault } from "./core/valueOrDefault";
import type { isBlankEmpty as IIsBlankEmpty } from "./core/isBlankEmpty";
import type { isHas as IIsHas } from "./core/isHas";
import type {
  timeFormatting as ITimeFormatting,
  TimeType as ITimeType,
} from "./core/timeFormatting";
import type { queryURLParams as IQueryURLParams } from "./core/queryURLParams";
import type { getSingleType as IGetSingleType } from "./core/getSingleType";
import type { toCamelCase as IToCamelCase } from "./core/toCamelCase";
import type { toUnderlineCase as IToUnderlineCase } from "./core/toUnderlineCase";

interface IStrUtil {
  toUnderlineCase: IToUnderlineCase;
  addPrefix: IAddPrefix;
  isArray: IIsArray;
  isEmpty: IIEmpty;
  toCamelCase: IToCamelCase;
  getSingleType: IGetSingleType;
  queryURLParams: IQueryURLParams;
  TimeType: ITimeType;
  timeFormatting: ITimeFormatting;
  isHas: IIsHas;
  isEmptyObject: IIsEmptyObject;
  isEmptyString: IIsEmptyString;
  isFunction: IIsFunction;
  isNull: IIsNull;
  isNumber: IIsNumber;
  isObject: IIsObject;
  isPlainObject: IIsplainObject;
  isString: IIsString;
  isUndefined: IIsUndefined;
  getTypes: IGetTypes;
  isDate: IIsDate;
  isError: IIsError;
  isFormData: IIsFormData;
  isMath: IIsMath;
  isRegExp: IIsRegExp;
  isSymbol: IIsSymbol;
  isMap: IIsMap;
  isSet: IIsSet;
  isFullObject: IIsFullObject;
  equals: IEquals;
  isNotEmpty: IIsNotEmpty;
  slice: ISlice;
  valueOrDefault: IValueOrDefault;
  isBlankEmpty: IIsBlankEmpty;
}
export declare const StrUtil: IStrUtil;

export { addPrefix } from "./core/addPrefix";
export { isArray } from "./core/isArray";
export { isEmpty } from "./core/isEmpty";
export { isEmptyObject } from "./core/isEmptyObject";
export { isEmptyString } from "./core/isEmptyString";
export { isFunction } from "./core/isFunction";
export { isNull } from "./core/isNull";
export { isNumber } from "./core/isNumber";
export { isObject } from "./core/isObject";
export { isPlainObject } from "./core/isPlainObject";
export { isString } from "./core/isString";
export { isUndefined } from "./core/isUndefined";
export { getTypes } from "./core/getTypes";
export { isDate } from "./core/isDate";
export { isError } from "./core/isError";
export { isFormData } from "./core/isFormData";
export { isMath } from "./core/isMath";
export { isRegExp } from "./core/isRegExp";
export { isSymbol } from "./core/isSymbol";
export { isMap } from "./core/isMap";
export { isSet } from "./core/isSet";
export { isFullObject } from "./core/isFullObject";
export { equals } from "./core/equals";
export { isNotEmpty } from "./core/isNotEmpty";
export { slice } from "./core/slice";
export { valueOrDefault } from "./core/valueOrDefault";
export { isBlankEmpty } from "./core/isBlankEmpty";
export { isHas } from "./core/isHas";
export { timeFormatting, TimeType } from "./core/timeFormatting";
export { queryURLParams } from "./core/queryURLParams";
export { getSingleType } from "./core/getSingleType";
export { toCamelCase } from "./core/toCamelCase";
export { toUnderlineCase } from "./core/toUnderlineCase";
