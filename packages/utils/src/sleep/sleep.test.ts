import sleep from './sleep';

describe('sleep', () => {
  test('should wait the passed time before continuing', async () => {
    let called = 0;

    setTimeout(() => called++, 50);

    await sleep(20);

    expect(called).toBe(0);

    await sleep(40); // Previous 20ms + 40ms = 60ms

    expect(called).toBe(1);
  });
});
