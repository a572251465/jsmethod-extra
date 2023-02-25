type joinPathNoResolve = <T = string>(...args: T[]) => string;
type addUrlPrefix = (url: string, prefix?: string) => string;
type isString = (value: unknown) => boolean;
type isEmpty = (value: unknown) => boolean;
type isFunction = (value: unknown) => boolean;
type isNumber = (value: unknown) => boolean;
type isUndefined = (value: unknown) => boolean;
type isArray = (value: unknown) => boolean;
type isObject = (value: unknown) => boolean;
type startCut = (value: string, len: number) => string;
type endCut = (value: string, len: number) => string;
type mergePathOnSymbol = (sign: string, ...args: string[]) => string;
type backPosCut = (value: string, pos: number, len?: number) => string;
type isFileExist = (filePath: string) => boolean;
type isDirExist = (dirPath: string) => boolean;
type exec = (
  command: string,
  callback: Function,
  options: { cwd: string }
) => void;
type execSync = <T>(command: string, options: { cwd: string }) => Promise<T>;
type currDirsCountAsync = (currPath) => Promise<number>;
type currFilesCountAsync = (currPath) => Promise<number>;
type sureDirAsync = (currPath, basePath) => Promise<void>;

export {
  joinPathNoResolve,
  addUrlPrefix,
  isEmpty,
  isString,
  isFunction,
  isNumber,
  startCut,
  endCut,
  mergePathOnSymbol,
  backPosCut,
  isUndefined
};
