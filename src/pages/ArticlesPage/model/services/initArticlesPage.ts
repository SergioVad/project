import { createAsyncThunk } from '@reduxjs/toolkit';
import { TSortOrder } from '@/shared/types/SortOrder';
import { ArticleType, sortByEntities } from '@/entities/Article';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticlesInited } from '../selectors/ArticlesPageSelectors';
import { ArticlesPageActions } from '../slices/ArticlesPage.slice';
import { fetchArticlesList } from './fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (searchParams, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const inited = getArticlesInited(getState());
            if (!inited) {
                const orderFromUrl = searchParams.get('order') as TSortOrder;
                const sortFromUrl = searchParams.get('sort') as sortByEntities;
                const searchFromUrl = searchParams.get('search');
                const typeFromUrl = searchParams.get('type') as ArticleType;
                if (orderFromUrl) {
                    dispatch(ArticlesPageActions.setOrder(orderFromUrl));
                }
                if (sortFromUrl) {
                    dispatch(ArticlesPageActions.setSort(sortFromUrl));
                }
                if (searchFromUrl) {
                    dispatch(ArticlesPageActions.setSearch(searchFromUrl));
                }
                if (typeFromUrl) {
                    dispatch(ArticlesPageActions.setType(typeFromUrl));
                }
                dispatch(ArticlesPageActions.initState());
                dispatch(fetchArticlesList({ searchParams }));
            }
        },
    );
