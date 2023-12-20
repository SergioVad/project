import { memo } from 'react';
import { Additional, classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center'
}

export enum TextSize {
    SIZE_M = 'size_m',
    SIZE_L = 'size_l',
}

interface TextProps {
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    className?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.SIZE_M,
    } = props;
    const additionalClasses: Additional = [cls[theme], cls[align], cls[size], className];
    return (
        <div className={classNames('', {}, additionalClasses)}>
            {title && <div className={cls.title}>{title}</div>}
            {text && <div className={cls.text}>{text}</div>}
        </div>
    );
});
