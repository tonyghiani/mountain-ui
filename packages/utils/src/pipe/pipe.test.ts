import pipe from './pipe';

describe('pipe', () => {
  test('pipes functions', () => {
    const sum1 = (val: number) => val + 1;
    const sum2 = (val: number) => val + 2;
    const sum3 = (val: number) => val + 3;

    const pipeSum = pipe(sum1, sum2, sum3);

    expect(pipeSum(0)).toBe(6);
  });
});
