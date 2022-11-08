import { useEffect } from 'react';
import { hasWindow } from '@mountain-ui/utils';

import useLocalStorage from '../useLocalStorage';
import usePrefersDarkMode from '../usePrefersDarkMode';

export interface UseDarkModeProps {
  darkModeClassName?: string;
  storageKey?: string;
  node?: HTMLElement;
}

/**
 *
 * @param {UseDarkModeProps} options
 */
function useDarkMode({
  darkModeClassName = 'dark-mode',
  storageKey = 'prefers-dark-mode',
  node
}: UseDarkModeProps = {}) {
  const prefersDarkMode = usePrefersDarkMode();

  const [isDarkMode, setMode] = useLocalStorage(storageKey, prefersDarkMode);

  const setClassName = (isDark: boolean) => {
    const element = node || window.document.body;
    const classAction = isDark ? 'add' : 'remove';
    element.classList[classAction](darkModeClassName);
  };

  const setDarkMode = (isDark: boolean) => {
    setClassName(isDark);
    setMode(isDark);
  };

  useEffect(() => {
    setClassName(isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    if (hasWindow()) {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', ev => setDarkMode(ev.matches));
    }
  }, []);

  return [isDarkMode, setDarkMode];
}

export default useDarkMode;
