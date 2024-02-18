import { rtkApi } from '@/shared/api/rtkApi';
import { TRatingCard } from '@/entities/Rating';

interface IGetArticlesRating {
    userId: string;
    articleId: string;
}

interface IPostArticlesRating {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const ArticlesRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticlesRating: build.query<TRatingCard[], IGetArticlesRating>({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        postArticlesRating: build.mutation<void, IPostArticlesRating>({
            query: (arg) => ({
                url: '/article-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useArticlesRating = ArticlesRatingApi.useGetArticlesRatingQuery;
export const usePostArticlesRating = ArticlesRatingApi.usePostArticlesRatingMutation;
