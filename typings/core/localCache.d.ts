export type ILocalCacheResult = {
  clear(): voi;
  get(key: string): string | null;
  key(index: number): string | null;
  del(key: string): void;
  set(...args: string[]): void;
  delay: (time: number) => { set: (...args: string[]) => void };
};

export declare const localCache: (storage: Storage) => ILocalCacheResult;
