import { useReducer } from 'react';
import { hasWindow } from '@mountain-ui/utils';

import useLocalStorage from '../useLocalStorage';

export interface UseFontSizeProps {
  storageKey?: string;
  initialSize?: string;
  variableName?: string;
}

const applyPropToDocument = (variableName: string, storedFontSize: string) =>
  document.documentElement.style.setProperty(variableName, storedFontSize);

const getDocumentProp = (variableName: string) =>
  document.documentElement.style.getPropertyValue(variableName);

/**
 *
 * @param {UseFontSizeProps} options
 */
export function useFontSize({
  storageKey = 'f_s',
  initialSize = '16px',
  variableName = '--font-size'
}: UseFontSizeProps = {}) {
  const [storedFontSize, storeFontSize] = useLocalStorage(storageKey, initialSize);

  function init(initialValue: string) {
    if (!hasWindow()) return initialValue;
    if (storedFontSize) applyPropToDocument(variableName, storedFontSize);
    return storedFontSize || getDocumentProp(variableName);
  }

  function reducer(_state: string, newFont: string | number) {
    const newSize = `${newFont}px`;
    applyPropToDocument(variableName, newSize);
    storeFontSize(newSize);
    return newFont;
  }

  return useReducer(reducer, initialSize, init);
}

export default useFontSize;
