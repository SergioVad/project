import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
    modal?: HTMLDivElement;
}

export const Navbar = (options: NavbarProps) => {
    const { className, modal } = options;
    const { t } = useTranslation();
    const [login, setLogin] = useState<boolean>(false);
    const openModal = useCallback(() => {
        setLogin(true);
    }, []);
    const closeModal = useCallback(() => {
        setLogin(false);
    }, []);
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
                {t('voiti')}
            </Button>
        </div>
    );
};
