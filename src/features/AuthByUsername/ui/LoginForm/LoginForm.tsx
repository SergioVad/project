import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getStateError } from 'features/AuthByUsername/model/selectors/getStateError';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getStateIsLoading } from '../../model/selectors/getStateIsLoading';
import { getStatePassword } from '../../model/selectors/getStatePassword';
import { getStateUsername } from '../../model/selectors/getStateUsername';
import cls from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/Login.slice';
import { authByUsername } from '../../model/services/AuthByUsername';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getStateUsername);
    const password = useSelector(getStatePassword);
    const isLoading = useSelector(getStateIsLoading);
    const error = useSelector(getStateError);
    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    const onSendData = useCallback(() => {
        dispatch(authByUsername({ password, username }));
    }, [dispatch, password, username]);
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text
                title={t('Форма Авторизации')}
            />
            {error
                && (
                    <Text
                        text={t('Ошибка. Попробуйте еще раз')}
                        theme={TextTheme.ERROR}
                    />
                )}
            <Input
                label={t('Введите имя')}
                className={cls.input}
                value={username}
                onChange={onChangeUsername}
            />
            <Input
                label={t('Введите пароль')}
                className={cls.input}
                value={password}
                onChange={onChangePassword}
            />
            <Button
                className={cls.button}
                onClick={onSendData}
                disabled={isLoading}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
