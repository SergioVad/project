import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, memo } from 'react';
import cls from './Tabs.module.scss';
import { Card } from '../Card/Card';

interface TabItem {
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
    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    className={cls.tab}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
