/* eslint-env jest */
import { cleanup, fireEvent, renderHook } from '@testing-library/react';

import useKeyDown from './useKeyDown';

describe('useKeyDown hook', () => {
  afterEach(cleanup);

  it('should call addEventListener on mount', () => {
    const handler = jest.fn();

    renderHook(() => useKeyDown('Enter', handler));

    fireEvent.keyDown(window.document, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(handler).toHaveBeenCalledTimes(1);
  });
});
