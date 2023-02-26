/* eslint-disable @typescript-eslint/no-explicit-any */
export type Func<TArgs extends any[], TResult> = (...args: TArgs) => TResult;
export type Action<TArgs extends any[]> = (...args: TArgs) => void;
