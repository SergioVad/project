import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/dynamicReducerLoader/dynamicReducerLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import {
    ArticlesPageReducer,
} from '../../model/slices/ArticlesPage.slice';
import { fetchNextArticles } from '../../model/services/fetchNextArticles';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { initArticlesPage } from '../../model/services/initArticlesPage';
import { ArticlesPageList } from '../ArticlesPageList/ArticlesPageList';

export interface ArticlesPageProps {
  className?: string;
}

export const reducerArticlesPage: ReducersList = {
    ArticlesPage: ArticlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });
    const onScrollEnd = () => {
        dispatch(fetchNextArticles());
    };
    return (
        <Page onScrollEnd={onScrollEnd}>
            <DynamicReducerLoader reducers={reducerArticlesPage} removeAfterUnmount={false}>
                <ArticlesPageFilters />
                <ArticlesPageList />
            </DynamicReducerLoader>
        </Page>
    );
};

export default memo(ArticlesPage);
