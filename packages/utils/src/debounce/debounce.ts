/**
 * Utility to debounce a function execution for the specified amount of time
 *
 * @param func Function to debounce
 * @param timeout Amount of millisecond to debounce the function call
 * @returns {boolean}
 */
function debounce<TArgs, TRes>(func: (...args: TArgs[]) => TRes, timeout = 300) {
  let timer: NodeJS.Timeout;
  return (...args: TArgs[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

export default debounce;
