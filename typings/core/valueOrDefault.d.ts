type ISelectType<T, K> = [T] extends [null]
  ? K
  : [T] extends [undefined]
  ? K
  : [T] extends [""]
  ? K
  : [T] extends [0]
  ? K
  : T;

export declare const valueOrDefault: <T, K>(
  value: T,
  replaceValue: K,
  judgeFn?: (value: unknown) => value is boolean
) => ISelectType<T, K>;
