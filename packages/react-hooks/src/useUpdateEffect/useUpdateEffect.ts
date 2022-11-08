import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

/**
 *
 * @param effect EffectCallback
 * @param deps DependencyList
 * @returns void
 */
function useUpdateEffect(effect: EffectCallback, deps?: DependencyList): void {
  const isUpdate = useRef(false);

  useEffect(() => {
    if (isUpdate.current) {
      return effect();
    } else {
      isUpdate.current = true;
    }
  }, deps);
}

export default useUpdateEffect;
