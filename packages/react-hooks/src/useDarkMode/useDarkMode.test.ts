import 'jest-localstorage-mock';

import { act, renderHook } from '@testing-library/react-hooks';

import useDarkMode from './useDarkMode';

describe('useDarkMode hook', () => {
  afterEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('should apply the passed class to the document body when dark mode is enabled', () => {
    const { result } = renderHook(() => useDarkMode({ darkModeClassName: 'dark-mode' }));
    const [, setDarkMode] = result.current;

    act(() => {
      setDarkMode(true);
    });

    expect(window.document.body.classList.contains('dark-mode')).toBe(true);

    act(() => {
      setDarkMode(false);
    });

    expect(window.document.body.classList.contains('dark-mode')).toBe(false);
  });
});
