/**
 * Raises an error with the specified message, if the value is falsy
 */
export function nf(value: any, msg: string): void | never {
    if (!value) {
        throw new Error(msg);
    }
}
/**
 * Helper for "variable x should not be null or undefined"
 */
export function assertNotNullish<T>(name: string, value: T): asserts value {
    if (value === null || value === undefined) {
        throw new Error(`${name} should not be null or undefined`);
    }
}

/**
 * Returns a rejected Promise with a specified error message
 */
export function rj(msg: string) {
    return Promise.reject(new Error(msg));
}

export function getDateParamValue(date: Date) {
    function formatDigit(i: number) {
        return i < 10 ? `0${i}` : i;
    }

    const d = date;

    return `${d.getFullYear()}${formatDigit(d.getMonth() + 1)}${formatDigit(
        d.getDate()
    )}${formatDigit(d.getHours())}${formatDigit(d.getMinutes())}${formatDigit(
        d.getSeconds()
    )}`;
}
