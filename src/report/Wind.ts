// import { Degree, Digit } from "helper/numbers";

const GUST_DELIMITER = 'G';

// type WindSpeed = `${Digit}${Digit}${Digit | ''}`
// type Gust = `${typeof GUST_DELIMITER}${WindSpeed}`;

export type Wind = string;

export function isWind(str: string): str is Wind {
    const [[direction1, direction2, direction3, ...windSpeedChars], gustSpeed] = str.split(GUST_DELIMITER);
    const direction = parseInt(direction1+direction2+direction3, 10);
    const windSpeed = parseInt(windSpeedChars.join(''), 10);
    return (
        direction >= 0 && direction <= 360 &&
        windSpeed >= 0 && windSpeed <= 999 &&
        gustSpeed === undefined || (parseInt(gustSpeed, 10) >= 0 && parseInt(gustSpeed, 10) <= 999)
    )
};
