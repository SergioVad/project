import {
    ChangeEvent, memo, useCallback, useMemo,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string>{
    value: T;
    content: string;
    disabled?: boolean;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    readOnly?: boolean;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className, label, onChange, value, options, readOnly,
    } = props;
    const mods: Mods = {};
    const optionsProps = useMemo(
        () => options?.map((opt) => (
            <option
                className={cls.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        )),
        [options],
    );
    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    }, [onChange]);
    return (
        <div className={classNames(cls.SelectWrapper, mods, [className])}>
            {label
            && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readOnly}
            >
                {optionsProps}
            </select>
        </div>
    );
};
