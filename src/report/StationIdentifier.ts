const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] as const;
type Letter = typeof LETTERS[number];

export type StationIdentifier = string;

export function isStationIdentifier(str: string): str is StationIdentifier {
    return str.length === 4 && str.split('').every(letter => LETTERS.includes(letter as Letter));
};
