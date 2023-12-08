import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/stateSchema';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema;
    asyncReducers?: ReducersMapObject<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const navigate = useNavigate();
    const { children, initialState, asyncReducers } = props;
    const store = createReduxStore(initialState, asyncReducers, navigate);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
