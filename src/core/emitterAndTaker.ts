// 订阅顺序
import { isEmpty } from "./isEmpty";
import { equals } from "./equals";

export enum SubscriberSort {
  FIRST,
  NORMAL,
  LAST,
}

interface IFn {
  (...args: any[]): any;
}

// 保存的记录
const saveRecords: Record<string, Array<[SubscriberSort, IFn, number]>> = {};

/**
 * @author lihh
 * @description 进行订阅
 * @param type 订阅类型
 * @param fn 订阅方法
 * @param sortValue 要排序的值
 * @param sortNumber 排序字段
 * @returns
 */
const on = (
  type: string,
  fn: IFn,
  sortValue = SubscriberSort.NORMAL,
  sortNumber = 1
) => {
  // 这里判断 第三个参数
  if (
    ![
      SubscriberSort.FIRST,
      SubscriberSort.NORMAL,
      SubscriberSort.LAST,
    ].includes(sortValue)
  )
    throw new Error(
      `params<sortValue> must be a SubscriberSort.FIRST, SubscriberSort.NORMAL, SubscriberSort.LAST`
    );

  // 拿到相关类型 的最后一个值
  const arr = saveRecords[type] || (saveRecords[type] = []);
  // 判断是否为空
  if (isEmpty(arr)) {
    // 第三个参数 参数排序
    arr.push([sortValue, fn, sortNumber]);
    return;
  }

  // 判断相关的值 是否存在
  const index = arr.findIndex(
    (el) => equals(el[0], sortValue) && equals(el[1], fn)
  );
  if (index > -1) return;

  // 添加元素
  arr.push([sortValue, fn, sortNumber]);

  // 先按 时间戳 排序
  arr.sort((a, b) => a[2] - b[2]);
  // 按照 sortValue 排序
  arr.sort((a, b) => a[0] - b[0]);
};

/**
 * @author lihh
 * @description 将订阅的函数进行触发
 * @param type 触发类型
 * @param args 剩余参数
 */
const emit = (type: string, ...args: unknown[]) => {
  const fns = saveRecords[type] || (saveRecords[type] = []);
  fns.forEach((fn) => fn[1](...args));
};

/**
 * @author lihh
 * @description 取消订阅
 * @param type 类型
 */
const off = (type: string) => {
  if (isEmpty(type))
    throw new Error(`off function params【type】 is not empty`);
  const keys: string[] = [type];
  keys.forEach((name: string) => {
    if (saveRecords[name]) Reflect.deleteProperty(saveRecords, name);
  });
};

export const emitterAndTaker = { on, emit, off };
