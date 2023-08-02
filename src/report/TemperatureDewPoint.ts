import { DIGIT, Digit } from "helper/numbers";

const TEMPERATURE_DEW_POINT_DELIMITER = '/';

export type TemperatureDewPoint = `${Digit}${Digit}${typeof TEMPERATURE_DEW_POINT_DELIMITER}${Digit}${Digit}`;

export function isTemperatureDewPoint(str: string): str is TemperatureDewPoint {
    const parts = str.split(TEMPERATURE_DEW_POINT_DELIMITER);
    return parts.every(part => part.length === 2 && part.split('').every(digit => DIGIT.includes(digit as Digit)));
};
