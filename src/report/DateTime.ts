import { MonthDay, Hour, Minute } from "../helper/numbers";

export type DateTime = `${MonthDay}${Hour}${Minute}Z`

export function isDateTime(str: string): str is DateTime {
    const [ day1, day2, hour1, hour2, minute1, minute2, zulu] = str;
    const day = parseInt(day1+day2, 10);
    const hour = parseInt(hour1+hour2, 10);
    const minute = parseInt(minute1+minute2, 10);

    return (
        str.length === 7 &&
        zulu === 'Z' &&
        day >= 0 && day <= 31 &&
        hour >= 0 && hour <= 24 &&
        minute >= 0 && minute <= 59
    );
}