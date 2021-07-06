import { useReducer } from 'react';

// eslint-disable-next-line no-unused-vars
type UseToggleResult<Type> = [Type, (_arg?: Type | undefined) => void];

function _toggler(currentValue: boolean, newValue: boolean | undefined) {
  return typeof newValue === 'boolean' ? newValue : !currentValue;
}

function useToggle(initialValue = false) {
  return useReducer(_toggler, initialValue) as UseToggleResult<boolean>;
}

export default useToggle;
