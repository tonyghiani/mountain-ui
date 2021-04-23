/**
 * Utility to pipe pure functions.
 * @param ...functions
 * @returns {boolean}
 */

type Func = (arg: unknown) => unknown;

const stepFn = (value: unknown, nextFn: Func) => nextFn(value);

const pipe = (...functions: Func[]) => (value: unknown): unknown => {
  return functions.reduce(stepFn, value);
};

export default pipe;
