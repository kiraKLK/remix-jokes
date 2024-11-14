/* eslint-disable @typescript-eslint/no-explicit-any */
export const singleton = <Value>(
  name: string,
  valueFactory: () => Value
): Value => {
  // const g = global as any;
  // g.__singletons ??= {};
  // g.__singletons[name] ??= valueFactory();
  // return g.__singletons[name];
  const g = global as any;
  g.__singletons = g.__singletons || {};
  if (!g.__singletons[name]) {
    g.__singletons[name] = valueFactory();
  }
  return g.__singletons[name];

};
