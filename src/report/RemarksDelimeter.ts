const REMARKS_DELIMETER = 'RMK';

export type RemarksDelimeter = typeof REMARKS_DELIMETER;

export function isRemarksDelimeter(str: string): str is RemarksDelimeter {
    return str === REMARKS_DELIMETER;
}