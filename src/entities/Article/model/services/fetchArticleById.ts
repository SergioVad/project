import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from 'app/providers/StoreProvider/config/stateSchema';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Article } from '../types/Article';

export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
    'Article/fetchArticleById',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;
        try {
            const response = await extra.api.get<Article>(`${RoutePath[AppRoutes.ARTICLE_DETAILS]}${id}`);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);
