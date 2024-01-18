import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';

import { memo } from 'react';
import { ArticleType } from 'entities/Article/model/types/Article';
// import cls from './ArticleTypeTabs.module.scss';

const typeTabs: TabItem[] = [
    {
        value: ArticleType.ALL,
        content: 'Все статьи',
    },
    {
        value: ArticleType.IT,
        content: 'Айти',
    },
    {
        value: ArticleType.ECONOMICS,
        content: 'Экономика',
    },
    {
        value: ArticleType.SCIENCE,
        content: 'Наука',
    },
];

interface ArticleTypeTabsProps {
    className?: string;
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, onTabClick, value } = props;
    return (
        <div className={classNames('', {}, [className])}>
            <Tabs
                tabs={typeTabs}
                value={value}
                onTabClick={onTabClick}
            />
        </div>
    );
});
