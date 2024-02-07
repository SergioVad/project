import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticlesPageSchema } from 'pages/ArticlesPage/model/types/ArticlesPageSchema';
import { IScrollSaveSchema } from 'features/scrollSave';
import { ArticleDetailsRecommendationsSchema } from 'pages/ArticleDetailsPage';
import { rtkApi } from 'shared/api/rtkApi';
import { ArticleCommentsSchema } from 'features/ArticleComments';
import { ProfileSchema } from 'features/EditableProfileCard';
import { ReducerManagerProps } from './reducerManager';

export interface StateSchema {
    user: UserSchema;
    scrollSave: IScrollSaveSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

    // Асинхронные редюсеры
    login?: LoginSchema;
    profile?: ProfileSchema;
    ArticleDetails?: ArticleDetailsSchema;
    ArticleComments?: ArticleCommentsSchema;
    ArticlesPage?: ArticlesPageSchema;
    ArticleDetailsRecommendations?: ArticleDetailsRecommendationsSchema;
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithReducerManager extends ToolkitStore<StateSchema> {
    reducerManager: ReducerManagerProps
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema,
}
