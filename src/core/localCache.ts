import { equals } from "./equals";
import { isBlankEmpty } from "./isBlankEmpty";

export function localCache(storage = window.sessionStorage) {
  function setCommonHandler(time: number, ...args: string[]) {
    for (let i = 0; i < args.length && equals(args.length % 2, 0); i += 2) {
      const [key, value] = [args[i], args[i + 1]];
      storage.setItem(key, value);
    }

    const invokeTimeOut = () => {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        for (let i = 0; i < args.length; i += 2) {
          const key = args[i];
          storage.removeItem(key);
        }
      }, time);
    };
    if (!equals(time, 0)) invokeTimeOut();
  }

  function getItems(): Array<string> {
    const items: Array<string> = [];

    let index = 0;
    for (;;) {
      const key = storage.key(index++);
      if (isBlankEmpty(key)) break;
      items.push(key!);
    }
    return items;
  }

  return {
    clear: storage.clear,
    delay(time: number) {
      return {
        set: setCommonHandler.bind(null, time),
      };
    },
    isHas(key: string): boolean {
      const items = getItems();
      return items.includes(key);
    },
    all(): Array<Record<string, unknown>> {
      return getItems().map((key) => ({ [key]: storage.getItem(key) }));
    },
    keys(): Array<string> {
      return getItems();
    },
    key: storage.key,
    set(...args: string[]) {
      setCommonHandler(0, ...args);
    },
    get: (...args: [string]) => storage.getItem(...args),
    del: (...args: [string]) => storage.removeItem(...args),
  };
}
