export declare const emitterAndTaker: {
  on: (
    type: string,
    fn: IFn,
    sortValue?: SubscriberSort,
    sortNumber?: number
  ) => void;
  emit: (type: string, ...args: unknown[]) => void;
  off: (type: string) => void;
};

export enum SubscriberSort {
  FIRST,
  NORMAL,
  LAST,
}
