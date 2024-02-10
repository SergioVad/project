import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchNextArticles } from './fetchNextArticles';
import { fetchArticlesList } from './fetchArticlesList';

jest.mock('./fetchArticlesList');

describe('fetchNextArticles.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            ArticlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 2 });
    });
    test('fetchAritcleList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            ArticlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
