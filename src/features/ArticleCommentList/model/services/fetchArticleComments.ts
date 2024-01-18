import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from 'app/providers/StoreProvider/config/stateSchema';
import { Comment } from 'entities/Comment';

export const fetchArticleComments = createAsyncThunk<Comment[], string, ThunkConfig<string>>(
    'profile/fetchArticleComments',
    async (articleId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;
        if (!articleId) return rejectWithValue('error');
        try {
            const response = await extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
