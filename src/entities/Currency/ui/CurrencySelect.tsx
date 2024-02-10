import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { SelectOption } from '@/shared/ui/Select/Select';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
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
            <ListBox
                label="Укажите валюту> "
                className={classNames('', {}, [className])}
                items={optionCurrency}
                disabled={readOnly}
                onChange={onChangeHandler}
                defaultValue="Укажите валюту"
                value={value}
                direction="top right"
            />
        );
    },
);
