export type ILocalCacheResult = {
  clear(): void;
  get(key: string): string | null;
  key(index: number): string | null;
  del(key: string): void;
  keys(): Array<string>;
  all(): Array<Record<string, unknown>>;
  has(key: string): boolean;
  set(...args: string[]): void;
  delay: (time: number) => { set: (...args: string[]) => void };
};

export declare const localCache: (storage: Storage) => ILocalCacheResult;
