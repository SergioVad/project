import { Additional, Mods, classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Flex.module.scss';

type FlexJustify = 'start' | 'end' | 'center' | 'between';

type FlexAlign = 'start' | 'end' | 'center';

type FlexDirextion = 'row' | 'column';

type FlexGap = '4' | '8' | '16' | '32';

export interface FlexProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirextion;
    gap?: FlexGap;
    max?: boolean;
    Tag?: keyof HTMLElementTagNameMap;
}

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionClasses: Record<FlexDirextion, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        align = 'center',
        justify = 'start',
        direction = 'row',
        gap,
        max,
        Tag = 'div',
    } = props;
    const classNameAdditionlal: Additional = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];
    const mods: Mods = {
        [cls.max]: max,
    };
    return (
        <Tag className={classNames(cls.Flex, mods, classNameAdditionlal)}>
            {children}
        </Tag>
    );
};
