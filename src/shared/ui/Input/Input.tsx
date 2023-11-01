import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        type = 'text',
        className,
        value,
        onChange,
        ...otherProps
    } = props;
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <input
            className={classNames(cls.Input, {}, [className])}
            type={type}
            onChange={onChangeInput}
            value={value}
            {...otherProps}
        />
    );
});
