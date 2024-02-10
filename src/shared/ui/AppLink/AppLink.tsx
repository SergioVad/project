/*eslint-disable*/
import { Link, LinkProps } from 'react-router-dom';
import { Additional, classNames } from '@/shared/lib/classNames/classNames';
import { ReactNode, memo } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY_INVERTED = 'primaryInverted',
    SECONDARY_INVERTED = 'secondaryInverted',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    theme?: AppLinkTheme;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        to,
        children,
        theme,
        ...otherProps
    } = props;
    const additionalClasses: Additional = theme 
        ? [className, cls[theme]] 
        : [className] 
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, additionalClasses)}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
