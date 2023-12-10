/**
 * Utility to pipe pure functions.
 * @param ...functions
 */

type Func<TInput> = (arg: TInput) => TInput;

const pipe =
  <TInput>(...functions: Func<TInput>[]) =>
  (value: TInput) => {
    return functions.reduce((value, nextFn) => nextFn(value), value);
  };

export default pipe;
