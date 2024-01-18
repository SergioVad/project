import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/stateSchema';
import {
    getArticlesHasMore, getArticlesIsLoading, getArticlesNum,
} from '../selectors/ArticlesPageSelectors';
import { ArticlesPageActions } from '../slices/ArticlesPage.slice';
import { fetchArticlesList } from './fetchArticlesList';

export const fetchNextArticles = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/fetchNextArticles',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const hasMore = getArticlesHasMore(getState());
            const page = getArticlesNum(getState());
            const isLoading = getArticlesIsLoading(getState());
            if (hasMore && !isLoading) {
                dispatch(ArticlesPageActions.setPage(page + 1));
                dispatch(fetchArticlesList({}));
            }
        },
    );
