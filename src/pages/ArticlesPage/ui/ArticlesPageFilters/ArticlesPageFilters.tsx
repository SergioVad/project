import { classNames } from 'shared/lib/classNames/classNames';

import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
    ArticleSortSelect, ArticleType, ArticleTypeTabs, ArticleViewSelector, ArticlesView, sortByEntities,
} from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { TSortOrder } from 'shared/types/SortOrder';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { useSearchParams } from 'react-router-dom';
import { TabItem } from 'shared/ui/Tabs/Tabs';
import { ArticlesPageActions } from '../../model/slices/ArticlesPage.slice';

import cls from './ArticlesPageFilters.module.scss';
import {
    getArticlesOrder,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
    getArticlesView,
} from '../../model/selectors/ArticlesPageSelectors';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const [searchParams] = useSearchParams();
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesView);
    const onChangeView = useCallback((view: ArticlesView) => {
        dispatch(ArticlesPageActions.setView(view));
    }, [dispatch]);
    const fetchData = useCallback(() => {
        dispatch(ArticlesPageActions.setPage(1));
        dispatch(fetchArticlesList({ replace: true, searchParams }));
    }, [dispatch, searchParams]);
    const debouncedFetchData = useDebounce(fetchData, 500);
    const type = useSelector(getArticlesType);

    const onChangeOrderSelect = useCallback((value: TSortOrder) => {
        dispatch(ArticlesPageActions.setOrder(value));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeEntitiesSelect = useCallback((value: sortByEntities) => {
        dispatch(ArticlesPageActions.setSort(value));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((value: string) => {
        dispatch(ArticlesPageActions.setSearch(value));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onTabClick = useCallback((tab: TabItem) => {
        dispatch(ArticlesPageActions.setType(tab.value as ArticleType));
        fetchData();
    }, [dispatch, fetchData]);

    const articlesOrderSelector = useSelector(getArticlesOrder);
    const articlesSortSelector = useSelector(getArticlesSort);
    const articlesSortSearch = useSelector(getArticlesSearch);
    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelect
                    entitiesSelect={articlesSortSelector}
                    orderSelect={articlesOrderSelector}
                    onChangeEntitiesSelect={onChangeEntitiesSelect}
                    onChangeOrderSelect={onChangeOrderSelect}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.input}>
                <Input
                    value={articlesSortSearch}
                    onChange={onChangeSearch}
                    label={t('Поиск')}
                />
            </Card>
            <ArticleTypeTabs onTabClick={onTabClick} value={type} />
        </div>
    );
});
