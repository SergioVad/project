import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentListLoading = (state: StateSchema) => state.ArticleCommentList?.isLoading;
export const getArticleCommentListError = (state: StateSchema) => state.ArticleCommentList?.error;
