import { cleanup, renderHook } from '@testing-library/react';

import useUpdateEffect from './useUpdateEffect';

describe('useUpdateEffect hook', () => {
  afterEach(cleanup);

  it('should execute the effect only on updates, skipping the first render', () => {
    let count = 0;
    const { rerender } = renderHook(() =>
      useUpdateEffect(() => {
        count++;
      })
    );

    // After first render the effect is not called
    expect(count).toBe(0);

    rerender();

    // After following renders the effect is triggered
    expect(count).toBe(1);
    rerender();
    expect(count).toBe(2);
  });

  it('should execute the cleanup function if one is returned', () => {
    let count = 0;
    const { rerender } = renderHook(() =>
      useUpdateEffect(() => {
        return () => {
          count++;
        };
      })
    );

    // After first render the effect is not called
    expect(count).toBe(0);

    rerender();

    // After following renders the effect is triggered
    expect(count).toBe(0);
    rerender();

    // After second update the cleanup function is executed
    expect(count).toBe(1);
  });
});
