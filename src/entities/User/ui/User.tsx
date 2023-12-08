import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './User.module.scss';

interface UserProps {
    className?: string;
}

export const User = memo(({ className }: UserProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.User, {}, [className])}>
            {t('test')}
        </div>
    );
});
