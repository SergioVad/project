import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import { Additional, Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        theme = ButtonTheme.OUTLINE,
        className,
        square,
        size = ButtonSize.M,
        type = 'button',
        disabled,
        fullWidth,
        ...otherProps
    } = props;
    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };
    const additional: Additional = [className, cls[theme], cls[size]];
    return (
        <button
            // eslint-disable-next-line react/button-has-type
            type={type}
            className={classNames(cls.Button, mods, additional)}
            {...otherProps}
        >
            {children}
        </button>
    );
});
