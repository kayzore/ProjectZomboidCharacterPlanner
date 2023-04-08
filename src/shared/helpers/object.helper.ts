/**
 * Flattens the given object and returns a flatten version with single depth-path.
 * @param obj Current object.
 * @param keys Object keys.
 * @returns A flatten version of the current object.
 */
export const flattenObject = (obj: object, keys = []): object => (
  Object.keys(obj).reduce((acc, currentKey) => {
    const key: never = currentKey as keyof typeof obj;
    const o = typeof obj[key] === 'object'
      ? flattenObject(obj[key], keys.concat(key))
      : { [keys.concat(key).join(".")]: obj[key] };

    return Object.assign(acc, o);
  }, {})
);
