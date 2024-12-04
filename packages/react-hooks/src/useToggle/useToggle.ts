import { useReducer } from 'react';

export type DispatchWithOptionalAction = (_arg?: unknown) => void;

export type UseToggleResult = [boolean, DispatchWithOptionalAction];

function _toggler(currentValue: boolean, newValue: boolean | undefined) {
  return typeof newValue === 'boolean' ? newValue : !currentValue;
}
/**
 *
 * @param initialValue boolean
 * @returns {UseToggleResult}
 */
function useToggle(initialValue: boolean = false): UseToggleResult {
  return useReducer(_toggler, initialValue);
}

export default useToggle;
