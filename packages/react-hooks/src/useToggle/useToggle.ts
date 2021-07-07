import { useReducer } from 'react';

// eslint-disable-next-line no-unused-vars
export type DispatchWithOptionalAction<Type> = (_arg?: Type | unknown) => void;

export type UseToggleResult<Type> = [Type, DispatchWithOptionalAction<Type>];

function _toggler(currentValue: boolean, newValue: boolean | undefined) {
  return typeof newValue === 'boolean' ? newValue : !currentValue;
}
/**
 *
 * @param initialValue boolean
 * @returns {UseToggleResult<boolean>}
 */
function useToggle(initialValue: boolean = false): UseToggleResult<boolean> {
  return useReducer(_toggler, initialValue);
}

export default useToggle;
