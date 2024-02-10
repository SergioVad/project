import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    src?: string;
    size?: number;
    alt?: string;
    className?: string;
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        src,
        size,
        alt = src,
    } = props;
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);
    return (
        <img
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt}
        />

    );
});
