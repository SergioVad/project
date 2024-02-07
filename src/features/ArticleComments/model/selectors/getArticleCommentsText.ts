import { StateSchema } from 'app/providers/StoreProvider';
import { initialState as ArticleCommentsState } from '../slices/ArticleComments.slice';

export const getArticleCommentsText = ((state: StateSchema) => state.ArticleComments?.text
    ?? ArticleCommentsState.text
);
