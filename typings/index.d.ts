type joinPathNoResolve = <T = string>(...args: T[]) => string;
type addUrlPrefix = (url: string, prefix?: string) => string;
type isString = (value: unknown) => boolean;
type isEmpty = (value: unknown) => boolean;
type isFunction = (value: unknown) => boolean;

export { joinPathNoResolve, addUrlPrefix, isEmpty, isString, isFunction };
