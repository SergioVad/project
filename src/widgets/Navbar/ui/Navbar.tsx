import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { LoginModal } from 'features/AuthByUsername';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getStateAuthData, getStateIsAdminRole, getStateIsManagerRole, userActions,
} from 'entities/User';
import { useSelector } from 'react-redux';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './Navbar.module.scss';
import IconNotification from '../assets/image/notification.svg';

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
    const isAdmin = useSelector(getStateIsAdminRole);
    const isManager = useSelector(getStateIsManagerRole);
    const isAdminPanelAvailabel = isAdmin || isManager;
    if (userAuthData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('App')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack
                    gap="16"
                    className={cls.actions}
                >
                    <Button theme={ButtonTheme.CLEAR}>
                        <Icon Img={IconNotification} inverted />
                    </Button>
                    <Dropdown
                        direction="bottom left"
                        trigger={(
                            <Avatar
                                size={50}
                                src={userAuthData.avatar}
                            />
                        )}
                        items={[
                            ...(isAdminPanelAvailabel ? [{
                                content: 'Админ',
                                href: RoutePath.admin_panel,
                            }] : []),
                            {
                                content: 'Выйти',
                                onClick: logout,
                            },
                            {
                                content: 'Профиль',
                                href: `${RoutePath.profile}${userAuthData.id}`,
                            },
                        ]}
                    />
                </HStack>
            </header>
        );
    }
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
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
        </header>
    );
});
