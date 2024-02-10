import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ForbiddenPageProps {
    className?: string;
}

export const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className])}>
            У вас нет доступа к этой странице
        </div>
    );
});
