import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, memo, useCallback } from 'react';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    tabs: TabItem[];
    className?: string;
    value: string;
    onTabClick: (value: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className, onTabClick, tabs, value,
    } = props;
    const clickHandle = useCallback(
        (tab: TabItem) => () => onTabClick(tab),
        [onTabClick],
    );
    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    key={tab.value}
                    className={cls.tab}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
