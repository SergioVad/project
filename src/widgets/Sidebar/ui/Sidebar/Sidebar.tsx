import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItams';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const handleToogle = () => {
        setCollapsed((prev) => !prev);
    };
    const sidebarItems = useSelector(getSidebarItems);
    const itemsList = useMemo(
        () => sidebarItems.map((value) => (
            <SidebarItem
                item={value}
                collapsed={collapsed}
                key={value.path}
            />
        )),
        [sidebarItems, collapsed],
    );
    return (
        <section
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <VStack Tag="nav" className={cls.items}>
                {itemsList}
            </VStack>
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={handleToogle}
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.XL}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={cls.langSwitcherMargin}
                />
            </div>
        </section>
    );
});
