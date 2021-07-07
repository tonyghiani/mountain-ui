import { useMemo } from 'react';

import useToggle, { DispatchWithOptionalAction } from '../useToggle';

export type VoidHandler = () => void;

export interface UseBooleanHandlers {
  on: VoidHandler;
  off: VoidHandler;
  toggle: DispatchWithOptionalAction<boolean>;
}

export type UseBooleanResult = [boolean, UseBooleanHandlers];

/**
 *
 * @param initialValue boolean
 * @returns {UseBooleanResult<boolean>}
 */
function useBoolean(initialValue = false): UseBooleanResult {
  const [value, toggle] = useToggle(initialValue);

  const handlers = useMemo(
    () => ({
      toggle,
      on: () => toggle(true),
      off: () => toggle(false)
    }),
    [toggle]
  );

  return [value, handlers];
}

export default useBoolean;
