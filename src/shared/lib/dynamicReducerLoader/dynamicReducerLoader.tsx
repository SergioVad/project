import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import {
    ReduxStoreWithReducerManager,
    StateSchemaKey,
} from '@/app/providers/StoreProvider';
import { useAppDispatch } from '../hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

interface DynamicReducerLoaderProps {
    children?: ReactNode;
    reducers: ReducersList
    removeAfterUnmount?: boolean;
}

export const DynamicReducerLoader = (props: DynamicReducerLoaderProps) => {
    const {
        children, reducers, removeAfterUnmount = true,
    } = props;
    const store = useStore() as ReduxStoreWithReducerManager;
    const dispatch = useAppDispatch();
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            {children}
        </div>
    );
};
