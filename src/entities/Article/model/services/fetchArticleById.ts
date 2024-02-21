import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../types/Article';
import { AppRoutes, RoutePath } from '@/shared/const/route';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'Article/fetchArticleById',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;
        try {
            const response = await extra.api.get<Article>(`${RoutePath[AppRoutes.ARTICLE_DETAILS]}${id}`, {
                params: { _expand: 'user' },
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
