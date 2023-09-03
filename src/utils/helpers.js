import dayjs from 'dayjs';
import { DATE_FORMAT, DEBOUNCE_TIMEOUT } from './constants';

/**
 * The debounceFunction is a higher-order function that returns a debounced version of a callback
 * function.
 * @returns The debounceFunction returns a function that takes a callback as an argument.
 * This returned function can be used to debounce the execution of the callback function.
 */
const debounceFunction = () => {
  let timeoutInstance = null;
  return (callback) => {
    /**
     * clear old timeout instance if exist.
     */
    if (timeoutInstance) clearTimeout(timeoutInstance);
    timeoutInstance = setTimeout(callback, DEBOUNCE_TIMEOUT);
  };
};

/* The line `export const debounce = debounceFunction();` is exporting a constant variable named
`debounce` that is assigned the value of the `debounceFunction` function. */
export const debounce = debounceFunction();

/**
 * The function `getFormattedDate` takes a time parameter and returns a formatted date
 * string using the dayjs library.
 * @param time - The `time` parameter is a variable that represents a specific date and time.
 *  It can be a string, a Date object, or a timestamp.
 */
export const getFormattedDate = (time) => dayjs(time).format(DATE_FORMAT);

/**
 * The `isEmpty` function checks if a value is empty, which includes undefined, null, empty objects,
 * and empty strings.
 * @param value - The `value` parameter is the value that you want to check if it is empty or not.
 * It can be of any type, such as a string, number, object, array, etc.
 * @returns a boolean value. It returns true if the value is empty (undefined, null,
 * an empty object, or a string with only whitespace characters), and false otherwise.
 */
export const isEmpty = (value) => value === undefined
  || value === null
  || (typeof value === 'object' && Object.keys(value).length === 0)
  || (typeof value === 'string' && value.trim().length === 0);
