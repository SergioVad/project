import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';
import { ArticleCommentListSchema } from '../types/ArticleCommentListSchema';
import { fetchArticleComments } from '../services/fetchArticleComments';

const commentAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentAdapter
    .getSelectors<StateSchema>((state) => state.ArticleCommentList || commentAdapter.getInitialState());

export const ArticleCommentList = createSlice({
    name: 'ArticleCommentList',
    initialState: commentAdapter.getInitialState<ArticleCommentListSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchArticleComments.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleComments.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false;
                commentAdapter.setAll(state, action);
            })
            .addCase(fetchArticleComments.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { reducer: ArticleCommentListReducer } = ArticleCommentList;
