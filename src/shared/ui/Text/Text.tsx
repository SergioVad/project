import { memo } from 'react';
import { Additional, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    INVERTED = 'inverted',
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
    S = 'size_s',
}

interface TextProps {
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    className?: string;

    'data-testid'?: string;
}

type THeaderTag = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, THeaderTag> = {
    [TextSize.L]: 'h1',
    [TextSize.M]: 'h2',
    [TextSize.S]: 'h3',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        'data-testid': testId = 'Text',
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;
    const HeaderTag = mapSizeToHeaderTag[size];
    const additionalClasses: Additional = [cls[theme], cls[align], cls[size], className];
    return (
        <div className={classNames('', {}, additionalClasses)}>
            {title
            && (
                <HeaderTag
                    className={cls.title}
                    data-testid={`${testId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text
            && (
                <p
                    className={cls.text}
                    data-testid={`${testId}.Paragraph`}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
