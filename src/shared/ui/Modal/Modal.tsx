import {
    MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Additional, Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Overlay } from '../Overlay/Overlay';
import { useTheme } from '@/shared/contexts/theme/useTheme';

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
    const timerOnOpen = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    useEffect(() => {
        setIsOpening(true);
    }, []);

    const { theme } = useTheme();

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose?.();
        }
    }, [onClose]);
    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout(timerOnOpen.current);
        };
    }, [onKeyDown]);
    const handleClose = () => {
        if (onClose) {
            setIsClosing(true);
            timerOnOpen.current = setTimeout(() => {
                onClose();
            }, 300);
        }
    };
    if (lazy && !isOpen) {
        return null;
    }
    const mods: Mods = {
        [cls.opened]: isOpening,
        [cls.closing]: isClosing,
    };
    const additionalClasses: Additional = [className, theme, 'app_modal'];
    const content = (
        <div className={classNames(cls.Modal, mods, additionalClasses)}>
            <Overlay onClick={handleClose} />
            <div className={cls.content}>
                {children}
            </div>
        </div>
    );
    return content;
};
