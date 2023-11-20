import isFunction from './isFunction';

describe('isFunction', () => {
  class Test {}

  test('should return true when the input is a function', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function () {})).toBe(true);
    expect(isFunction(Test)).toBe(true);
  });

  test('should return false when the input is not a function', () => {
    expect(isFunction(42)).toBe(false);
    expect(isFunction('Mountain ui')).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction(Symbol())).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(new Set())).toBe(false);
    expect(isFunction(new Map())).toBe(false);
    expect(isFunction(new WeakSet())).toBe(false);
    expect(isFunction(new WeakMap())).toBe(false);
    expect(isFunction({})).toBe(false);
  });
});
