import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Portal } from '@/shared/ui/Portal/Portal';
import { LoginModal } from '@/features/AuthByUsername';
import { getStateAuthData } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { PopoverNotifications } from '@/features/PopoverNotifications';
import { DropdownAvatar } from '@/features/DropdownAvatar';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
    modal?: HTMLDivElement | null;
}

export const Navbar = memo((options: NavbarProps) => {
    const userAuthData = useSelector(getStateAuthData);
    const { className, modal } = options;
    const { t } = useTranslation();
    const [login, setLogin] = useState<boolean>(false);
    const openModal = useCallback(() => {
        setLogin(true);
    }, []);
    const closeModal = useCallback(() => {
        setLogin(false);
    }, []);
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
                    theme={AppLinkTheme.SECONDARY_INVERTED}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack
                    gap="16"
                    className={cls.actions}
                >
                    <PopoverNotifications />
                    <DropdownAvatar />
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
