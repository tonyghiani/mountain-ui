// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import deepMerge, { BareObject } from './deepMerge';

describe('deepMerge', () => {
  let obj1: BareObject;
  let obj2: BareObject;
  let obj3: BareObject;

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

  test('should throw an error if any argument is not an object', () => {
    expect(() => deepMerge(obj1, 'foo')).toThrowError(TypeError);
    expect(() => deepMerge(3, obj1)).toThrowError(TypeError);
  });
});
