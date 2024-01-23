import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema) => {
    return state.ArticleDetailsRecommendations?.isLoading;
};
export const getArticleRecommendationsError = (state: StateSchema) => {
    return state.ArticleDetailsRecommendations?.error;
};
