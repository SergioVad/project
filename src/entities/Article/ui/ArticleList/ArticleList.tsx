import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticlesView } from '../../model/types/Article';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    articles?: Article[];
    className?: string;
    view: ArticlesView;
    isLoading?: boolean;
}

const getSkeletons = (view: ArticlesView) => new Array(view === ArticlesView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));
export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view,
        isLoading,
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
            className={cls.card}
        />
    );
    if (!isLoading && articles && !articles.length) {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Text size={TextSize.SIZE_L} text="Статьи не найдены" />
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            {articles && articles?.length > 0
                ? articles.map(renderArticle)
                : null}
            { isLoading && getSkeletons(view)}
        </div>
    );
});
