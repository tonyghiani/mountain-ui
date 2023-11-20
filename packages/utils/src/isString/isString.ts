/**
 * Type guard to check if a value is a string.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is Function} True if the value is a string, otherwise false.
 */
function isString(arg: unknown): arg is string {
  return typeof arg === 'string';
}

export default isString;
