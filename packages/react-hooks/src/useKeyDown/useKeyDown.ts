import type { Key } from 'ts-key-enum';

import useEventListener from '../useEventListener';

type KeyUnion = `${Key}` | (string & {});

function useKeyDown(key: KeyUnion, callback: (_event: KeyboardEvent) => void) {
  useEventListener('keydown', event => event.key === key && callback(event));
}

export default useKeyDown;
