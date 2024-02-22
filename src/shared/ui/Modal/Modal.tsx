import { ReactNode } from 'react';
import { Additional, Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Overlay } from '../Overlay/Overlay';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const {
        className, children, isOpen, onClose, lazy,
    } = props;

    const { theme } = useTheme();

    const {
        handleClose,
        isClosing,
        isOpening,
    } = useModal({ onClose, isOpen });
    if (lazy && !isOpen) {
        return null;
    }
    const mods: Mods = {
        [cls.opened]: isOpening,
        [cls.closing]: isClosing,
    };
    const additionalClasses: Additional = [className, theme, 'app_modal'];
    return (
        <div className={classNames(cls.Modal, mods, additionalClasses)}>
            <Overlay onClick={handleClose} />
            <div className={cls.content}>
                {children}
            </div>
        </div>
    );
};
