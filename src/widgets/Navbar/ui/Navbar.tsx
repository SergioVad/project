import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { LoginModal } from 'features/AuthByUsername';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getStateAuthData, userActions } from 'entities/User';
import { useSelector } from 'react-redux';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
    modal?: HTMLDivElement | null;
}

export const Navbar = memo((options: NavbarProps) => {
    const userAuthData = useSelector(getStateAuthData);
    const dispatch = useAppDispatch();
    const { className, modal } = options;
    const { t } = useTranslation();
    const [login, setLogin] = useState<boolean>(false);
    const openModal = useCallback(() => {
        setLogin(true);
    }, []);
    const closeModal = useCallback(() => {
        setLogin(false);
    }, []);
    const logout = useCallback(() => {
        dispatch(userActions.logout());
        localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }, [dispatch]);
    if (userAuthData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    className={cls.links}
                    onClick={logout}
                    theme={ButtonTheme.CLEAR_INVERTED}
                >
                    {t('Выйти')}
                </Button>
            </div>
        );
    }
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            {modal
            && (
                <Portal element={modal}>
                    <LoginModal
                        isOpen={login}
                        onClose={closeModal}
                    />
                </Portal>
            )}
            <Button
                type="button"
                className={cls.links}
                onClick={openModal}
                theme={ButtonTheme.CLEAR_INVERTED}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
