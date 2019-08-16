import pusher from '../src/util-pusher-x';

describe('pusher', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof pusher).toBe('function');
  });

  it('should start from 0 by default and create target', function() {
    expect.assertions(1);
    expect(pusher([1, 2])).toStrictEqual([1, 2]);
  });

  it('should start from 1 and create target', function() {
    expect.assertions(1);
    expect(pusher([1, 2], 1)).toStrictEqual([2]);
  });

  it('should use a provided target', function() {
    expect.assertions(2);
    const target = [1, 2];
    expect(pusher([0, 1, 2, 3, 4], 3, target)).toBe(target);
    expect(target).toStrictEqual([1, 2, 3, 4]);
  });
});
