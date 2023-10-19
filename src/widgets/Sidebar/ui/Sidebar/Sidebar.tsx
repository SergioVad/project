import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';
import About from '../../assets/image/main.svg';
import Main from '../../assets/image/about.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const handleToogle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to="/"
                    className={cls.item}
                >
                    <Main className={cls.img} />
                    <span className={cls.link}>{t('Главная')}</span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to="/about"
                    className={cls.item}
                >
                    <About className={cls.img} />
                    <span className={cls.link}>{t('О сайте')}</span>
                </AppLink>

            </div>
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
                <LangSwitcher short={collapsed} className={cls.langSwitcherMargin} />
            </div>
        </div>
    );
};
