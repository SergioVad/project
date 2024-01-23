import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleCommentListSchema } from 'features/ArticleCommentList';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage/model/types/ArticlesPageSchema';
import { IScrollSaveSchema } from 'features/scrollSave';
import { ArticleDetailsRecommendationsSchema } from 'pages/ArticleDetailsPage';
import { ReducerManagerProps } from './reducerManager';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    scrollSave: IScrollSaveSchema;

    // Асинхронные редюсеры
    login?: LoginSchema;
    profile?: ProfileSchema;
    ArticleDetails?: ArticleDetailsSchema;
    ArticleCommentList?: ArticleCommentListSchema;
    addCommentForm?: AddCommentFormSchema;
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
