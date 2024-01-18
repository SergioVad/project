import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { ThunkConfig } from 'app/providers/StoreProvider/config/stateSchema';
import { useSetSearchParams } from 'shared/lib/hooks/useAppSearchParams/useAppSearchParams';
import {
    getArticlesLimit, getArticlesNum, getArticlesOrder, getArticlesSearch, getArticlesSort,
} from '../selectors/ArticlesPageSelectors';

interface FetchArticlesListProps {
    replace?: boolean;
    searchParams?: URLSearchParams;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
    >(
        'articlesPage/fetchArticlesList',
        async (props, thunkApi) => {
            const { replace, searchParams } = props;
            const { extra, rejectWithValue, getState } = thunkApi;
            const limit = getArticlesLimit(getState());
            const order = getArticlesOrder(getState());
            const sort = getArticlesSort(getState());
            const search = getArticlesSearch(getState());
            const page = getArticlesNum(getState());
            try {
                if (searchParams) {
                    useSetSearchParams({ order, sort, search }, searchParams);
                }
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _page: page,
                        _limit: limit,
                        _sort: sort,
                        _order: order,
                        q: search,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }
                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
