/* eslint-env jest */
import { cleanup, renderHook } from '@testing-library/react';

import useIsClient from './useIsClient';

describe('useIsClient hook', () => {
  afterEach(cleanup);

  it('should be true when rendering client side', () => {
    const { result } = renderHook(() => useIsClient(), { hydrate: true });
    expect(result.current).toBe(true);
  });
});
