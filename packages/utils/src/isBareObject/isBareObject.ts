/**
 * Utility to verify if the passed input is a plain object.
 * @param arg
 * @returns {boolean}
 */
function isBareObject(arg: unknown): boolean {
  return arg?.toString() === '[object Object]';
}

export default isBareObject;
