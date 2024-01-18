import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import {
    Article, ArticleType, ArticlesView, sortByEntities,
} from 'entities/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { TSortOrder } from 'shared/types/SortOrder';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList';

const articleAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticlesPage = articleAdapter
    .getSelectors<StateSchema>((state) => state.ArticlesPage || articleAdapter.getInitialState());

export const ArticlesPageSlice = createSlice({
    name: 'ArticlesPage',
    initialState: articleAdapter.getInitialState<ArticlesPageSchema>({
        error: undefined,
        isLoading: false,
        view: ArticlesView.SMALL,
        ids: [],
        entities: {},
        hasMore: true,
        page: 1,
        _inited: false,
        limit: 9,
        order: 'asc',
        sort: sortByEntities.CREATED,
        search: '',
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticlesView>) => {
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
            state.view = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<TSortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<sortByEntities>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initState: (state) => {
            state._inited = true;
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticlesView;
            state.view = view;
            state.limit = view === ArticlesView.BIG ? 4 : 9;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
                if (action.meta.arg.replace) {
                    articleAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length === state.limit;
                articleAdapter.addMany(state, action);
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: ArticlesPageActions } = ArticlesPageSlice;
export const { reducer: ArticlesPageReducer } = ArticlesPageSlice;
