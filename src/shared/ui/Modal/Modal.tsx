import { Mods, classNames } from 'shared/lib/classNames/classNames';
import {
    MouseEvent, ReactNode, useCallback, useEffect,
} from 'react';
import cls from './Modal.module.scss';

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
    const mods: Mods = {
        [cls.opened]: isOpen,
    };
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose?.();
        }
    }, [onClose]);
    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    const handleContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };
    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };
    if (lazy && !isOpen) {
        return null;
    }
    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div onClick={handleClose} className={cls.overlay}>
                <div onClick={handleContentClick} className={cls.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};
