import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './User.module.scss';

interface UserProps {
    className?: string;
}

export const User = ({ className }: UserProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.User, {}, [className])}>
            test
        </div>
    );
};
