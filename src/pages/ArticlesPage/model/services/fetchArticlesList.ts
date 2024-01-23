import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article, ArticleType } from 'entities/Article';
import { useSetSearchParams } from 'shared/lib/hooks/useAppSearchParams/useAppSearchParams';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesLimit, getArticlesNum, getArticlesOrder, getArticlesSearch, getArticlesSort, getArticlesType,
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
            const type = getArticlesType(getState());
            try {
                if (searchParams) {
                    useSetSearchParams({
                        order, sort, search, type,
                    }, searchParams);
                }
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _page: page,
                        _limit: limit,
                        _sort: sort,
                        _order: order,
                        q: search,
                        type_like: type === ArticleType.ALL ? undefined : type,
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
