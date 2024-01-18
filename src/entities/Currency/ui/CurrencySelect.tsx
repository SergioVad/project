import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { ECurrency } from '../model/types/CurrencyTypes';

interface CurrencyProps {
    className?: string;
    value?: string;
    readOnly?: boolean;
    onChange?: (value: ECurrency) => void;

}

const optionCurrency: SelectOption<string>[] = Object
    .entries(ECurrency)
    .map((item) => ({ value: item[0], content: item[1] }));

export const CurrencySelect = memo(
    (props: CurrencyProps) => {
        const {
            className, onChange, value, readOnly,
        } = props;
        const { t } = useTranslation();
        const onChangeHandler = useCallback((value: string) => {
            onChange?.(value as ECurrency);
        }, [onChange]);
        return (
            <Select
                label="Выберите валюту"
                className={classNames('', {}, [className])}
                options={optionCurrency}
                value={value}
                onChange={onChangeHandler}
                readOnly={readOnly}
            />
        );
    },
);
