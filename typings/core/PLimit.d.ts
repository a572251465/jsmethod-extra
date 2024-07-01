export interface FiringTaskType {
  (): Promise<void>;
}

class IPLimitC {
  firingTask(argTask: FiringTaskType);
}

interface IPLimit {
  getInstance: (maxConcurrentRequests: number) => IPLimitC;
}

export declare const PLimit: IPLimit;
