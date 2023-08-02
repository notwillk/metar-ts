import { DIGIT, Digit } from "helper/numbers";

export const SKY_CONDITION_TYPE = {
    'BKN': "Broken",
    "OVC": "Overcast",
} as const;

export const SKY_CONDITION_INDICATOR = {
    'CB': "Cumulonimbus clouds",
    "TCU": "Towering cumulus clouds",
} as const;

export type SkyCondition = `${keyof typeof SKY_CONDITION_TYPE}${Digit}${Digit}${Digit}${keyof typeof SKY_CONDITION_INDICATOR}`;

export function isSkyCondition(str: string): str is SkyCondition {
    const [type1, type2, type3, height1, height2, height3, ...indicatorArray] = str;
    const indicator = indicatorArray.join('');
    const type = type1 + type2 + type3;
    const heights = [height1, height2, height3];
    return indicator in SKY_CONDITION_TYPE && heights.every(char => DIGIT.includes(char as Digit)) && (indicator === '' || indicator in SKY_CONDITION_INDICATOR);
}
