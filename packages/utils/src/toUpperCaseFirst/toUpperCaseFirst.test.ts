import toUpperCaseFirst from './toUpperCaseFirst';

describe('toUpperCaseFirst', () => {
  test('should turn the first letter of as string to upper case', () => {
    expect(toUpperCaseFirst('test')).toBe('Test');
  });

  test('should work with empty strings', () => {
    expect(toUpperCaseFirst('')).toBe('');
  });
});
