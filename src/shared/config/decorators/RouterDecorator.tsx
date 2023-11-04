import { StoryFn } from '@storybook/react';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = () => (
    (Story: StoryFn) => (
        <BrowserRouter>
            <Suspense fallback="">
                <Story />
            </Suspense>
        </BrowserRouter>
    )
);
