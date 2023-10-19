export type Mods = Record<string, boolean | string>
export type Additional = string[]
export function classNames(
    cls: string,
    mods: Mods = {},
    additional:Additional = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
}
