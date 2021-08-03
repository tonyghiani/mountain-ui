import { useEffect, useState } from 'react';
import { hasWindow } from '@mountain-ui/utils';

/**
 *
 * @param key string
 * @param initialValue any
 * @returns {UseLocalStorageResult}
 */
function useLocalStorage(key: string, initialValue?: unknown) {
  const loadStoredValue = () => {
    if (!hasWindow()) return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(
        `#useLocalStorage: an error occurred loading the localStorage key “${key}”:`,
        error
      );
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(loadStoredValue);

  const setValue = (value: unknown) => {
    if (!hasWindow()) {
      console.warn(
        `#useLocalStorage: impossible to set the localStorage “${key}” inside a no-client context.`
      );
    }

    try {
      const valueToStore = typeof value === 'function' ? value(storedValue) : value;

      window.localStorage.setItem(key, JSON.stringify(valueToStore));

      setStoredValue(valueToStore);
    } catch (error) {
      console.warn(`#useLocalStorage: error setting the localStorage key “${key}”:`, error);
    }
  };

  useEffect(() => {
    setStoredValue(loadStoredValue());
  }, []);

  return [storedValue, setValue];
}

export default useLocalStorage;
