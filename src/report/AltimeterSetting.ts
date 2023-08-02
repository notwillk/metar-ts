import { DIGIT, Digit } from "helper/numbers";

const ALTIMETER_DELIMITER = 'A';

export type AltimeterSetting = `${typeof ALTIMETER_DELIMITER}${Digit}${Digit}${Digit}${Digit}`;

export function isAltimeterSetting(str: string): str is AltimeterSetting {
    const [delimiter, ...valueArray] = str;
    return delimiter === ALTIMETER_DELIMITER && valueArray.length === 4 && valueArray.every(char => DIGIT.includes(char as Digit));
}
