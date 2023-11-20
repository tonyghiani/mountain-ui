import toLowerCaseFirst from './toLowerCaseFirst';

describe('toLowerCaseFirst', () => {
  test('should turn the first letter of as string to lower case', () => {
    expect(toLowerCaseFirst('TEST')).toBe('tEST');
  });

  test('should work with empty strings', () => {
    expect(toLowerCaseFirst('')).toBe('');
  });
});
