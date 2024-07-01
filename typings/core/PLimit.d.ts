export interface FiringTaskType {
  (): Promise<void>;
}

export interface IPLimitC {
  firingTask(argTask: FiringTaskType);
}

interface IPLimit {
  getInstance: (maxConcurrentRequests: number) => IPLimitC;
}

export declare const PLimit: IPLimit;
