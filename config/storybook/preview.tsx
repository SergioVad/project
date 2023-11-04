import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { RouterDecorator } from 'shared/config/decorators/RouterDecorator';
import { StoreDecorator } from 'shared/config/decorators/StoreProvider';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator';
import { Theme } from 'shared/contexts/theme/ThemeContext';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        RouterDecorator(),
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({}),
    ],
};

export default preview;
