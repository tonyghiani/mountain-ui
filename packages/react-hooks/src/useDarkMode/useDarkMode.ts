import { useEffect } from 'react';

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
  const [isDarkMode, setDarkMode] = useLocalStorage(storageKey);

  const prefersDarkMode = usePrefersDarkMode();

  const isEnabled = typeof isDarkMode !== 'undefined' ? isDarkMode : prefersDarkMode;

  useEffect(() => {
    const element = node || window.document.body;
    const classAction = isEnabled ? 'add' : 'remove';
    element.classList[classAction](darkModeClassName);
  }, [isEnabled]);

  return [isEnabled, setDarkMode];
}

export default useDarkMode;
