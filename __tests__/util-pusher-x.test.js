import pusher, {stringSplit, $split, getIterable} from '../src/util-pusher-x';

describe('pusher', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof pusher).toBe('function');
  });

  it('has working stringSplit', function() {
    expect.assertions(1);
    expect(stringSplit('abc', '')).toStrictEqual(['a', 'b', 'c']);
  });

  it('has working $split', function() {
    expect.assertions(1);
    expect($split('abc', '')).toStrictEqual(['a', 'b', 'c']);
  });

  it('getIterable', function() {
    expect.assertions(2);
    expect(getIterable('abc')).toStrictEqual(['a', 'b', 'c']);
    expect(getIterable(null)).toBeNull();
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

  it('target should be a new empty array if not array like', function() {
    expect.assertions(4);
    expect(pusher(1)).toStrictEqual([]);
    expect(pusher(true)).toStrictEqual([]);
    expect(pusher(null)).toStrictEqual([]);
    expect(pusher()).toStrictEqual([]);
  });

  it('strings', function() {
    expect.assertions(1);
    expect(pusher('123')).toStrictEqual(['1', '2', '3']);
  });
});
