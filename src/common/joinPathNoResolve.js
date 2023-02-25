export const joinPathNoResolve = (...args) =>
  args.reduce((memo, curr) => memo + curr, "");
