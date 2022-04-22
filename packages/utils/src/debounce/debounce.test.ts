import sleep from '../sleep';

import debounce from './debounce';

describe('debounce', () => {
  test('should wait the passed time before calling the passed function', async () => {
    let called = 0;

    const testFn = () => called++;
    const debouncedFn = debounce(testFn, 50);

    debouncedFn();
    await sleep(20);
    expect(called).toBe(0);

    debouncedFn();
    await sleep(20);
    expect(called).toBe(0);

    debouncedFn();
    await sleep(20);
    expect(called).toBe(0);

    debouncedFn();
    await sleep(20);
    expect(called).toBe(0);

    debouncedFn();
    await sleep(60);
    expect(called).toBe(1);
  });

  test('should forward the arguments to the passed function', async () => {
    let called = 0;
    let amount = 0;

    const testFn = (increase: number) => {
      called++;
      amount += increase;
    };
    const debouncedFn = debounce(testFn, 50);

    debouncedFn(42);
    await sleep(20);
    expect(called).toBe(0);
    expect(amount).toBe(0);

    debouncedFn(54);
    await sleep(60);
    expect(called).toBe(1);
    expect(amount).toBe(54);

    debouncedFn(23);
    await sleep(20);
    expect(called).toBe(1);
    expect(amount).toBe(54);

    debouncedFn(67);
    await sleep(20);
    expect(called).toBe(1);
    expect(amount).toBe(54);

    debouncedFn(12);
    await sleep(60);
    expect(called).toBe(2);
    expect(amount).toBe(66);
  });
});
