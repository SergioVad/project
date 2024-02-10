import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/dynamicReducerLoader/dynamicReducerLoader';
import { getStateIsLoading } from '../../model/selectors/getStateIsLoading/getStateIsLoading';
import { getStatePassword } from '../../model/selectors/getStatePassword/getStatePassword';
import { getStateUsername } from '../../model/selectors/getStateUsername/getStateUsername';
import { getStateError } from '../../model/selectors/getStateError/getStateError';
import { loginActions, loginReducer } from '../../model/slice/Login.slice';
import { authByUsername } from '../../model/services/AuthByUsername';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

export const reducersLoginForm: ReducersList = {
    login: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
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
    const onSendData = useCallback(async () => {
        const result = await dispatch(authByUsername({ password, username }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess?.();
        }
    }, [dispatch, password, username, onSuccess]);
    return (
        <DynamicReducerLoader reducers={reducersLoginForm} removeAfterUnmount>
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
        </DynamicReducerLoader>
    );
});

export default LoginForm;
