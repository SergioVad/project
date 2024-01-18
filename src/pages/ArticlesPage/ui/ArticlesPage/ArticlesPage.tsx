import { useSearchParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/dynamicReducerLoader/dynamicReducerLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import {
    ArticlesPageReducer,
    getArticlesPage,
} from '../../model/slices/ArticlesPage.slice';
import {
    getArticlesError, getArticlesInited, getArticlesIsLoading, getArticlesNum, getArticlesView,
} from '../../model/selectors/ArticlesPageSelectors';
import { fetchNextArticles } from '../../model/services/fetchNextArticles';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { initArticlesPage } from '../../model/services/initArticlesPage';

export interface ArticlesPageProps {
  className?: string;
}

export const reducerArticlesPage: ReducersList = {
    ArticlesPage: ArticlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticlesPage.selectAll);
    const error = useSelector(getArticlesError);
    const page = useSelector(getArticlesNum);
    const isLoading = useSelector(getArticlesIsLoading);
    const inited = useSelector(getArticlesInited);
    const view = useSelector(getArticlesView);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });
    const onScrollEnd = () => {
        dispatch(fetchNextArticles());
    };
    return (
        <DynamicReducerLoader reducers={reducerArticlesPage} removeAfterUnmount={false}>
            <Page onScrollEnd={onScrollEnd} className={classNames('', {}, [className])}>
                <ArticlesPageFilters />
                <ArticleList
                    view={view}
                    isLoading={isLoading}
                    articles={articles}
                />
            </Page>
        </DynamicReducerLoader>
    );
};

export default memo(ArticlesPage);
