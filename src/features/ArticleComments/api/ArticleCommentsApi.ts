import { Comment } from 'entities/Comment';
import { rtkApi } from 'shared/api/rtkApi';

const ArticleCommentsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleComments: build.query<Comment[], string>({
            query: (id) => ({
                url: '/comments',
                params: {
                    articleId: id,
                    _expand: 'user',
                },
            }),
        }),

    }),
});

export const { useGetArticleCommentsQuery } = ArticleCommentsApi;
