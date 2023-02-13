type joinPathNoResolve = <T = string>(...args: T[]) => string;
type addUrlPrefix = (url: string, prefix?: string) => string;
type isString = (value: unknown) => boolean;
type isEmpty = (value: unknown) => boolean;
type isFunction = (value: unknown) => boolean;
type isNumber = (value: unknown) => boolean;
type startCut = (value: string, len: number) => string;
type endCut = (value: string, len: number) => string;
type mergePathOnSymbol = (sign: string, ...args: string[]) => string;

export {
  joinPathNoResolve,
  addUrlPrefix,
  isEmpty,
  isString,
  isFunction,
  isNumber,
  startCut,
  endCut,
  mergePathOnSymbol
};
