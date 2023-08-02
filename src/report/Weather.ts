import { DIGIT, Digit } from "helper/numbers";

export const WEATHER_INTENSITY = {
    '+': "Heavy",
    "": "Moderate",
    "-": "Light",
} as const;

export const WEATHER_DESCRIPTOR = {
    VC: "In the vicinity",
    RE: "Recent hour's most important past phenomenon with residues",
    MI: "Shallow (fog)",
    PR: "Partial (fog)",
    BC: "Patches (fog)",
    DR: "Low drifting below eye level",
    BL: "Blowing at or above eye level",
    SH: "Showers",
    TS: "Thunderstorm",
    FZ: "Freezing",
} as const;

export const WEATHER_PRECIPITATION = {
    DZ: 'Drizzle',
    RA: 'Rain',
    SN: 'Snow (snowflakes)',
    SG: 'Snow Grains',
    GS: 'Snow Pellets',
    GR: 'Hail',
    PL: 'Ice Pellets',
    IC: 'Ice Crystals',
    UP: 'Unknown Precipitation',
} as const;

export const WEATHER_OBSCURATION = {
    FG: "Fog",
    BR: "Mist",
    HZ: "Haze",
    VA: "Volcanic Ash",
    DU: "Widespread Dust",
    FU: "Smoke",
    SA: "Sand",
    PY: "Spray",
} as const;

export const WEATHER_OTHER = {
    SQ: "Squall",
    PO: "Dust",
    DS: "Duststorm",
    SS: "Sandstorm",
    FC: "Funnel Cloud",
} as const;

const ALL_WEATHER = {
    ...WEATHER_DESCRIPTOR,
    ...WEATHER_PRECIPITATION,
    ...WEATHER_OBSCURATION,
    ...WEATHER_OTHER,
} as const;

export const WEATHER_TIME_DELIMITER = {
    B: "Began at",
    E: "End at",
} as const;

type WeatherIntensity = keyof typeof WEATHER_INTENSITY;
type WeatherDescriptor = keyof typeof WEATHER_DESCRIPTOR;
type WeatherPrecipitation = keyof typeof WEATHER_PRECIPITATION;
type WeatherObscuration = keyof typeof WEATHER_OBSCURATION;
type WeatherOther = keyof typeof WEATHER_OTHER;
type WeatherTime = ``
type Weather = string;

function countChar(str: string, char: string) {
    return str.split('').reduce<number>((acc, c) => c === char ? acc + 1 : acc, 0);
}

export function isWeather(str: string): str is Weather {
    return str.length > 0 && isWeatherRecursive(str);
}

function isWeatherRecursive(str: string): boolean {
    if(str.length === 0) {
        return true;
    }
    if(str[0] in WEATHER_INTENSITY) {
        return !(str[1] in WEATHER_INTENSITY) && isWeatherRecursive(str.slice(1));
    }
    if(str.length >= 2 && str[0] + str[1] in ALL_WEATHER) {
        return isWeatherRecursive(str.slice(2));
    }
    if(Object.keys(WEATHER_TIME_DELIMITER).every(char => countChar(str, char) <= 1)) {
        const [delimiter, numeral1, numeral2] = str;
        return delimiter in WEATHER_TIME_DELIMITER && DIGIT.includes(numeral1 as Digit) && DIGIT.includes(numeral2 as Digit) && isWeatherRecursive(str.slice(3));
    }
    return false;
}