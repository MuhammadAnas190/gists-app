import { DEBOUNCE_TIMEOUT } from './constants';
import { debounce, getFormattedDate, isEmpty } from './helpers';

describe('Test suitcase for getFormattedDate', () => {
  it('should return formatted date', () => {
    const formattedDate = getFormattedDate('2023-10-10T16:51:40Z');
    expect(formattedDate).toBe('10/10/2023');
  });
});

describe('Test suitcase for debounce', () => {
  it('should debounce a cb', () => {
    /* control and manipulate timers in tests. */
    jest.useFakeTimers();

    /* create a mock function */
    const cb = jest.fn();
    debounce(cb);

    expect(cb).not.toHaveBeenCalled();
    /* advancing the timer by 400 ms */
    jest.advanceTimersByTime(DEBOUNCE_TIMEOUT);
    expect(cb).toHaveBeenCalled();
  });
});

describe('Test suitcase for isEmpty', () => {
  it('should return true for null', () => {
    const isNull = isEmpty(null);
    expect(isNull).toBeTruthy();
  });

  it('should return true for undefined', () => {
    const isUndefined = isEmpty(undefined);
    expect(isUndefined).toBeTruthy();
  });

  it('should return true for empty string', () => {
    const isString = isEmpty('');
    expect(isString).toBeTruthy();
  });

  it('should return true for an empty object', () => {
    const isPresent = isEmpty({});
    expect(isPresent).toBeTruthy();
  });

  it('should return true for an empty array', () => {
    const isPresent = isEmpty([]);
    expect(isPresent).toBeTruthy();
  });

  it('should return false for an array', () => {
    const isPresent = isEmpty(['Hey!']);
    expect(isPresent).toBeFalsy();
  });

  it('should return false for an object', () => {
    const isPresent = isEmpty({ a: 'b' });
    expect(isPresent).toBeFalsy();
  });
});
