import isBareObject from './isBareObject';

describe('isBareObject', () => {
  class Test {}

  test('should return true when the input is a bare object', () => {
    expect(isBareObject({})).toBe(true);
    expect(isBareObject({ a: 1 })).toBe(true);
    expect(isBareObject(new Test())).toBe(true);
    expect(isBareObject(Object.create({}))).toBe(true);
  });

  test('should return false when the input is not a bare object', () => {
    expect(isBareObject(42)).toBe(false);
    expect(isBareObject('Mountain ui')).toBe(false);
    expect(isBareObject(true)).toBe(false);
    expect(isBareObject([])).toBe(false);
    expect(isBareObject(Symbol())).toBe(false);
    expect(isBareObject(null)).toBe(false);
    expect(isBareObject(new Set())).toBe(false);
    expect(isBareObject(new Map())).toBe(false);
    expect(isBareObject(new WeakSet())).toBe(false);
    expect(isBareObject(new WeakMap())).toBe(false);
  });
});
