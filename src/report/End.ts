const END_DELIMETER = '=';

export type EndDelimeter = typeof END_DELIMETER;

export function isEndDelimeter(str: string): str is EndDelimeter {
    return str === END_DELIMETER;
}