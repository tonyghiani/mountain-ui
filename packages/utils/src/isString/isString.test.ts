import isString from './isString';

describe('isString', () => {
  test('should return true when the input is a string', () => {
    expect(isString('mountain ui')).toBe(true);
    expect(isString('')).toBe(true);
  });

  test('should return false when the input is not a string', () => {
    expect(isString(42)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString(Symbol())).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(new Set())).toBe(false);
    expect(isString(new Map())).toBe(false);
    expect(isString(new WeakSet())).toBe(false);
    expect(isString(new WeakMap())).toBe(false);
    expect(isString({})).toBe(false);
  });
});
