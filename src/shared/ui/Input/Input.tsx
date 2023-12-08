/* eslint-disable */
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    label?: string;
}

export const Input = memo((props: InputProps) => {
    const {
        type = 'text',
        label = '',
        className,
        value,
        onChange,
        readOnly,
        ...otherProps
    } = props;
    const mods: Mods = {
        [cls.readOnly]: readOnly,
    }
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <label>
            {label}
            <input
                className={classNames(cls.Input, mods, [className])}
                type={type}
                onChange={onChangeInput}
                value={value}
                readOnly={readOnly}
                {...otherProps}
            />
        </label>
    );
});
