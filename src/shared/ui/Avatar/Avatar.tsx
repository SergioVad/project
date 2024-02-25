import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage/AppImage';
import userAvatar from '@/shared/assets/icons/user-avatar.svg';
import { Icon } from '../Icon/Icon';
import { Skeleton } from '../Skeleton/Skeleton';

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
        size = 100,
        alt = src,
    } = props;
    const errorFalback = <Icon inverted Img={userAvatar} />;
    const fallback = <Skeleton border="50%" height={size} width={size} />;
    return (
        <AppImage
            fallback={fallback}
            errorFalback={errorFalback}
            size={size}
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt}
        />
    );
});
