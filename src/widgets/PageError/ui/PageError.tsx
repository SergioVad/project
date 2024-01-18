import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    const handleReload = () => {
        window.location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            {t('Что то пошло не так, попробуйте перезагрузить страницу')}
            <button
                type="button"
                onClick={handleReload}
            >
                {t('Перезагрузить страницу')}

            </button>
        </div>
    );
});
