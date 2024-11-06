import { equals } from "../equals";
import { isFunction } from "../isFunction";

export interface ValueTypes<T> {
  current: T;
}

/**
 * @description 模拟 react 的useState hook状态
 * @param initialValue 初期化值
 * @param watchHandler value值变化值, 触发的事件
 * @author lihh
 */
export function useState<T = string>(
  initialValue: T,
  watchHandler?: (prev: T, curr: T) => void
): [ValueTypes<T>, (v: T) => void] {
  const state: ValueTypes<T> = {
    current: initialValue,
  };
  const setState = (v: T) => {
    // equals 简单的比较
    if (!equals(state.current, v) && isFunction(watchHandler)) {
      watchHandler(state.current, v);
    }

    state.current = v;
  };

  return [state, setState];
}
