/*
 * Extended from Gabe Ragland implementation https://usehooks.com/useEventListener/
 * to accept multiple events with the same handler and listener options
 */
import { EventHandler, MutableRefObject, useEffect, useRef } from 'react';
import { hasWindow } from '@mountain-ui/utils';

type EventsMap = DocumentEventMap & WindowEventMap;
export type TEventKey = keyof EventsMap | (string & {});
export type Target = Window | Document | MutableRefObject<HTMLElement>;

function getElement(target: Target) {
  const targetIsRef = 'current' in target;
  return targetIsRef ? target.current : target;
}

function useEventListener<
  TEvent extends TEventKey,
  TEventListener extends EventHandler<any> = TEvent extends keyof EventsMap
    ? (_event: EventsMap[TEvent]) => void
    : EventHandler<any>
>(
  events: TEvent | TEvent[],
  handler: TEventListener,
  target: Target = hasWindow() ? window : null,
  options?: boolean | AddEventListenerOptions
) {
  // Create a list of events if a single string is passed
  const eventList = Array.isArray(events) ? events : [events];
  const serializedEventList = JSON.stringify(eventList);
  const serializedOptions = JSON.stringify(options);

  // Create a ref that stores the handler
  const savedHandler = useRef(handler);

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  // Search for "Latest Ref pattern" to know more about the topic.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Use window if no element is passed, otherwise default to null in SSR
    const element = getElement(target);
    // Make sure element supports addEventListener
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const listener = (event: Event) => savedHandler.current && savedHandler.current(event);

    // Add event listener
    eventList.forEach(event => element.addEventListener(event, listener, options));

    // Remove event listener on cleanup
    return () => {
      eventList.forEach(event => element.removeEventListener(event, listener, options));
    };
  }, [serializedEventList, target, serializedOptions]);
}

export default useEventListener;
