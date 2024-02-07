import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleCommentsSchema } from '../types/ArticleCommentsSchema';

export const initialState: ArticleCommentsSchema = {
    text: '',
};

export const ArticleCommentsSlice = createSlice({
    name: 'ArticleComments',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { actions: ArticleCommentsActions } = ArticleCommentsSlice;
export const { reducer: ArticleCommentsReducer } = ArticleCommentsSlice;
