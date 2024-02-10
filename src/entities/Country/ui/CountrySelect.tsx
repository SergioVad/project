import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { SelectOption } from '@/shared/ui/Select/Select';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { ECountry } from '../model/types/CountryTypes';

interface CountryProps {
    className?: string;
    value?: string;
    readOnly?: boolean;
    onChange?: (value: ECountry) => void;
}

const optionCountry: SelectOption<string>[] = Object
    .entries(ECountry)
    .map((item) => ({ value: item[0], content: item[1] }));

export const CountrySelect = memo(
    (props: CountryProps) => {
        const {
            className, onChange, value, readOnly,
        } = props;
        const { t } = useTranslation();
        const onChahgeHandler = useCallback((value?: string) => {
            onChange?.(value as ECountry);
        }, [onChange]);
        return (
            <ListBox
                className={classNames('', {}, [className])}
                items={optionCountry}
                disabled={readOnly}
                onChange={onChahgeHandler}
                defaultValue="Укажите Страну"
                label="Укажите Страну> "
                value={value}
                direction="top right"
            />
        );
    },
);
