import {
    memo, ReactNode, useCallback, useEffect,
} from 'react';
import { Additional, classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/contexts/theme/useTheme';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import {
    AnimationProvider,
    useAnimationLibs,
} from '@/shared/lib/Components/AnimationProvider/AnimationProvider';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    onClose?: () => void;
    isOpen?: boolean;
}

const height = window.innerHeight - 100;

export const DrawerContent = memo((props: DrawerProps) => {
    const { Spring, Gesture } = useAnimationLibs();
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
    const {
        className,
        children,
        onClose,
        isOpen,
    } = props;

    const { theme } = useTheme();

    const {
        handleClose,
        isClosing,
        isOpening,
    } = useModal({ onClose, isOpen });

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, openDrawer, isOpen]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
        },
    );

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    if (!isOpen) {
        return null;
    }
    const mods: Mods = {
        [cls.opened]: isOpening,
        [cls.closed]: isClosing,
    };
    const additionalClasses: Additional = [className, theme, 'app_drawer'];
    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, additionalClasses)}>
                <Overlay onClick={handleClose} />
                <Spring.a.div
                    className={cls.sheet}
                    style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
});

export const DrawerAsync = memo((props: DrawerProps) => {
    const { isLoading } = useAnimationLibs();

    if (!isLoading) {
        return null;
    }

    return (
        <DrawerContent {...props} />
    );
});
export const Drawer = memo((props: DrawerProps) => {
    return (
        <AnimationProvider>
            <DrawerAsync {...props} />
        </AnimationProvider>
    );
});
