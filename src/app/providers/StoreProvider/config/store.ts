import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './stateSchema';

export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
    reducer: {

    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
});
