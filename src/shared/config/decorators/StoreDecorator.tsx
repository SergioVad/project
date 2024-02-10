import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

export const StoreDecorator = (
    store: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (
    (Story: StoryFn) => (
        <StoreProvider
            initialState={store as StateSchema}
            asyncReducers={asyncReducers as ReducersMapObject<StateSchema>}
        >
            <Story />
        </StoreProvider>
    )
);
