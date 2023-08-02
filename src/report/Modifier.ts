export const MODIFIER = {
    'AUTO': "Automatic",
    'COR': "Correction",
} as const;

export type Modifier = keyof typeof MODIFIER;

export function isModifier(str: string): str is Modifier {
    return str in MODIFIER;
};
