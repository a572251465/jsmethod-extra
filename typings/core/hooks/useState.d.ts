export interface ValueTypes<T> {
  current: T;
}

export declare const useState: <T>(
  initialValue: T,
  watchHandler?: (prev: T, curr: T) => void
) => [ValueTypes<T>, (v: T) => void];
