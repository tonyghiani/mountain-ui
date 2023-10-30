/**
 * Utility to verify if the passed input is a plain object.
 * @param arg
 * @returns {boolean}
 */
function isBareObject<TObject extends Record<PropertyKey, unknown>>(arg: TObject): arg is TObject {
  return arg?.toString() === '[object Object]';
}

export default isBareObject;
