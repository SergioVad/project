import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useState } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = (options: NavbarProps) => {
    const { t } = useTranslation();
    const { className } = options;
    const [login, setLogin] = useState<boolean>(false);
    const handleLogin = () => {
        setLogin(true);
    };
    const closeModal = () => {
        setLogin(false);
    };
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Portal>
                <Modal
                    isOpen={login}
                    onClose={closeModal}
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Id amet facilis quia aliquid, delectus
                    magnam quibusdam obcaecati officiisx provident dolor ut dolores
                    ipsam rerum sapiente quaerat non unde illum tempora.
                </Modal>
            </Portal>
            <Button
                type="button"
                className={cls.links}
                onClick={handleLogin}
                theme={ButtonTheme.CLEAR_INVERTED}
            >
                {t('voiti')}
            </Button>
        </div>
    );
};
