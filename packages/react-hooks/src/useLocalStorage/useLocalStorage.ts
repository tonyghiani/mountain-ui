import { useEffect, useState } from 'react';
import { hasWindow } from '@mountain-ui/utils';

/**
 *
 * @param key string
 * @param initialValue any
 * @returns {UseLocalStorageResult}
 */
function useLocalStorage(key: string, initialValue?: unknown) {
  /**
   * The loadStoredValue retrieve the stored value
   * from the localStorage if it exists.
   * In case the hook is used in SSR, it returns the
   * initial value until it gets hydrated in the client.
   */
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

  /**
   * This state holds the value associated with the store key
   * and is served to the component.
   */
  const [storedValue, setStoredValue] = useState(loadStoredValue);

  /**
   * The setValue function check whether is possible
   * to store a new value for the key argument and
   * update the local state to notify the component about the change
   */
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
