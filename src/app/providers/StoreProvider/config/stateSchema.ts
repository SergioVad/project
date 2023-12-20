import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';
import { ArticleDetailsSchema } from 'entities/Article';
import { ReducerManagerProps } from './reducerManager';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // Асинхронные редюсеры
    login?: LoginSchema;
    profile?: ProfileSchema
    ArticleDetails?: ArticleDetailsSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithReducerManager extends ToolkitStore<StateSchema> {
    reducerManager: ReducerManagerProps
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema,
}
