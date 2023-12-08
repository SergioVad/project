import { Mods, classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, memo, useCallback, useMemo,
} from 'react';
import { ECurrency } from 'entities/Currency';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    readOnly?: boolean;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
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
        onChange?.(e.target.value);
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
});
