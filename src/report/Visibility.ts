const UNITS = 'SM';
const VALUE_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/'] as const;

export type Visibility = `${string}${typeof UNITS}`;

export function isVisibility(str: string): str is Visibility {
    const parts = str.split(UNITS);
    const correctLength = parts.length === 2;
    const [value, after] = parts;
    const nothingAfterUnit = after === '';
    const numbers = value.split('/');
    const isNumber = (numbers.length === 2 || numbers.length === 1) && numbers.every(part => part.split('').every(char => VALUE_CHARS.includes(char as typeof VALUE_CHARS[number])));

    return correctLength && nothingAfterUnit && isNumber;
};
