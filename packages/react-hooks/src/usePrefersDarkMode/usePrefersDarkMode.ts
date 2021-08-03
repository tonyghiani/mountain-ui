import useMediaQuery from '../useMediaQuery';

/**
 *
 * @returns {boolean}
 */
function usePrefersDarkMode() {
  return useMediaQuery('(prefers-color-scheme: dark)');
}

export default usePrefersDarkMode;
