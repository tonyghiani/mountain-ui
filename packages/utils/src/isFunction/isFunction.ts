type AnyFunction = (..._args: any) => any;
/**
 * Type guard to check if a value is a function.
 *
 * @param {unknown} arg - The arg to check.
 * @returns {arg is Function} True if the arg is a function, otherwise false.
 */
function isFunction(arg: unknown): arg is AnyFunction {
  return typeof arg === 'function';
}

export default isFunction;
