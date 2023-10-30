import React from 'react';

import { requiredArgument } from '../internals';
import useEventListener from '../useEventListener';

/**
 *
 * @param ref object
 * @param handler function
 * @param event string
 */
function useOutsideClick(
  ref: React.RefObject<HTMLElement> | void = requiredArgument('ref'),
  handler: (_e: Event) => void,
  event = 'click'
): void {
  const listener: EventListener = event => {
    const { current: el } = ref || {};
    const isFunction = typeof handler === 'function';

    if (isFunction && !el?.contains(event.target as Node)) handler(event);
  };

  useEventListener([event, 'touchstart'], listener);
}

export default useOutsideClick;
