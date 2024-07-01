export interface FiringTaskType {
  (): Promise<void>;
}

export interface IPLimitC {
  firingTask(...argTask: Array<FiringTaskType>);
}

interface IPLimit {
  getInstance: (maxConcurrentRequests: number) => IPLimitC;
}

export declare const PLimit: IPLimit;
