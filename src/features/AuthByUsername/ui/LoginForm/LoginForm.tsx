import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input className={cls.input} value={value} onChange={setValue} />
            <Input className={cls.input} value={value} onChange={setValue} />
            <Button className={cls.button}>Войти</Button>
        </div>
    );
};
