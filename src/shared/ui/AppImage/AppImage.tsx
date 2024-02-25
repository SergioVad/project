import {
    CSSProperties, ImgHTMLAttributes, ReactNode, memo,
    useLayoutEffect, useMemo, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactNode;
    errorFalback?: ReactNode;
    size?: number;
    round?: boolean;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className, src, alt = 'image', fallback, errorFalback,
        size, round, ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setIsError(true);
        };
    }, [src]);
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
        borderRadius: round ? '50%' : undefined,
    }), [size, round]);
    if (isLoading && fallback) {
        return fallback;
    }
    if (isError && errorFalback) {
        return errorFalback;
    }
    return (
        <img
            style={styles}
            className={className}
            src={src}
            alt={alt}
            {...otherProps}
        />
    );
});
