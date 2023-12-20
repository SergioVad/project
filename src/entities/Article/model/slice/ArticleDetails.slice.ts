import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById';
import { Article } from '../types/Article';

const initialState: ArticleDetailsSchema = {
    isLoading: false,
};

export const ArticleDetailsSlice = createSlice({
    name: 'ArticleDetails',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: ArticleDetailsActions } = ArticleDetailsSlice;
export const { reducer: ArticleDetailsReducer } = ArticleDetailsSlice;
