import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { ECountry } from '../model/types/CountryTypes';

interface CountryProps {
    className?: string;
    value?: string;
    readOnly?: boolean;
    onChange?: (value: ECountry) => void;
}

const optionCountry: SelectOption[] = Object
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
            <Select
                label={t('vyberite-stranu')}
                className={classNames('', {}, [className])}
                options={optionCountry}
                value={value}
                onChange={onChahgeHandler}
                readOnly={readOnly}
            />
        );
    },
);
