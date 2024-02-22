import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { getStateAuthData } from '@/entities/User';
import cls from './SidebarItem.module.scss';
import { SidebarItemInterface } from '../../model/types/sidebarItems';

interface SidebarItemProps {
    item: SidebarItemInterface;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const isAuth = useSelector(getStateAuthData);
    const { item, collapsed } = props;

    const { t } = useTranslation();
    const mods: Mods = {
        [cls.collapsed]: collapsed,
    };
    if (item.authOnly && !isAuth) return false;
    return (
        <AppLink
            theme={AppLinkTheme.PRIMARY_INVERTED}
            to={item.path}
            className={classNames(cls.item, mods, [])}
        >
            <item.Icon className={cls.img} />
            <span className={cls.link}>{t(item.name)}</span>
            <span className={cls.link}>{item.name}</span>
        </AppLink>
    );
});
