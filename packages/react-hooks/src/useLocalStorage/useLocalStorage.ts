import { useState } from 'react';

type UseLocalStorageResult = [any, (_value: unknown) => void];

/**
 *
 * @param key string
 * @param initialValue any
 * @returns {UseLocalStorageResult}
 */
function useLocalStorage(key: string, initialValue?: unknown): UseLocalStorageResult {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: unknown) => {
    try {
      const valueToStore = typeof value === 'function' ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
