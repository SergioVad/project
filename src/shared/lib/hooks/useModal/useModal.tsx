import {
    MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';

interface UseModalProps {
    onClose?: () => void;
    animationDelay?: number;
    isOpen?: boolean;
}

export function useModal(props: UseModalProps) {
    const { animationDelay = 300, onClose, isOpen } = props;
    const timerOnOpen = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsOpening(true);
        }
    }, [isOpen]);

    const handleClose = () => {
        if (onClose) {
            setIsClosing(true);
            timerOnOpen.current = setTimeout(() => {
                onClose();
            }, animationDelay);
        }
    };

    // Новые ссылки!!!
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

    return {
        isClosing,
        isOpening,
        handleClose,
    };
}
