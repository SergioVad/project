import {
    CombinedState, Reducer, ReducersMapObject, configureStore,
} from '@reduxjs/toolkit';
import { userReducer } from '@/entities/User';
import { $api } from '@/shared/api/api';
import { scrollSaveReducer } from '@/features/scrollSave';
import { rtkApi } from '@/shared/api/rtkApi';
import { StateSchema } from './stateSchema';
import { createReducerManager } from './reducerManager';

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        scrollSave: scrollSaveReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducer);
    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
        }).concat(rtkApi.middleware),
    });
    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
};
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
