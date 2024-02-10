import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleType, ArticlesView, sortByEntities } from '@/entities/Article';

export const getArticlesError = (state: StateSchema) => state.ArticlesPage?.error;
export const getArticlesIsLoading = (state: StateSchema) => state.ArticlesPage?.isLoading || false;
export const getArticlesView = (state: StateSchema) => state.ArticlesPage?.view || ArticlesView.SMALL;
export const getArticlesNum = (state: StateSchema) => state.ArticlesPage?.page || 1;
export const getArticlesLimit = (state: StateSchema) => state.ArticlesPage?.limit || 9;
export const getArticlesHasMore = (state: StateSchema) => state.ArticlesPage?.hasMore;
export const getArticlesInited = (state: StateSchema) => state.ArticlesPage?._inited;
export const getArticlesOrder = (state: StateSchema) => state.ArticlesPage?.order || 'asc';
export const getArticlesSort = (state: StateSchema) => state.ArticlesPage?.sort || sortByEntities.CREATED;
export const getArticlesSearch = (state: StateSchema) => state.ArticlesPage?.search ?? '';
export const getArticlesType = (state: StateSchema) => state.ArticlesPage?.type ?? ArticleType.ALL;
