import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (store: DeepPartial<StateSchema>) => (
    (Story: StoryFn) => (
        <StoreProvider initialState={store as StateSchema}>
            <Story />
        </StoreProvider>
    )
);
