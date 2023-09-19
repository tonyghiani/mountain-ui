/**
 * Utility to verify if the passed input is a plain object.
 * @param arg
 * @returns {boolean}
 */
function isBareObject(arg: unknown): arg is Record<string, unknown> {
  return arg?.toString() === '[object Object]';
}

export default isBareObject;
