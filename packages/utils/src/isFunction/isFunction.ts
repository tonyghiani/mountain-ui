/**
 * Type guard to check if a value is a function.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is Function} True if the value is a function, otherwise false.
 */
function isFunction(arg: unknown): arg is Function {
  return typeof arg === 'function';
}

export default isFunction;
