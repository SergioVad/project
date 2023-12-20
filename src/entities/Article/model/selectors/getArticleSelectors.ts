import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleData = (state: StateSchema) => state.ArticleDetails?.data;
export const getArticleError = (state: StateSchema) => state.ArticleDetails?.error;
export const getArticleLoading = (state: StateSchema) => state.ArticleDetails?.isLoading;
