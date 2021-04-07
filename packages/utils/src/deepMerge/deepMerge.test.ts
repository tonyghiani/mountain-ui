import deepMerge from './deepMerge';

describe('deepMerge', () => {
  let obj1: Record<string, unknown>;
  let obj2: Record<string, unknown>;
  let obj3: Record<string, unknown>;

  beforeEach(() => {
    obj1 = { a: 1, b: 2 };
    obj2 = { b: 1, c: 3 };
    obj3 = { c: 3, d: 4 };
  });

  test("should deepMerge two object's properties", () => {
    expect(deepMerge(obj1, obj2)).toStrictEqual({ a: 1, b: 1, c: 3 });
    expect(deepMerge(obj2, obj1)).toStrictEqual({ a: 1, b: 2, c: 3 });
    expect(deepMerge(obj1, {})).toStrictEqual(obj1);
    expect(deepMerge(obj2, {})).toStrictEqual(obj2);
  });

  test("should deepMerge more object's properties", () => {
    expect(deepMerge(obj1, obj2, obj3)).toStrictEqual({ a: 1, b: 1, c: 3, d: 4 });
  });

  test("should deepMerge nested object's properties", () => {
    obj1.nested = obj2;
    obj2.nested = obj3;
    expect(deepMerge(obj1, obj2, obj3)).toStrictEqual({
      a: 1,
      b: 1,
      c: 3,
      d: 4,
      nested: { b: 1, c: 3, d: 4, nested: { c: 3, d: 4 } }
    });
    expect(deepMerge(obj1, obj3)).toStrictEqual({
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      nested: { b: 1, c: 3, nested: { c: 3, d: 4 } }
    });
  });

  test('should return an empty object when has not input arguments', () => {
    expect(deepMerge()).toStrictEqual({});
    expect(deepMerge()).not.toStrictEqual({ a: 1 });
    expect(deepMerge()).not.toStrictEqual(null);
    expect(deepMerge()).not.toStrictEqual(42);
    expect(deepMerge()).not.toStrictEqual('test');
    expect(deepMerge()).not.toStrictEqual(true);
  });
});

describe('test', () => {
  test('dsfds', () => {
    expect(true).toBe(true);
  });
});
