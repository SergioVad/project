import type { Preview } from '@storybook/react';
import { ThemeDecorator } from '../../src/shared/config/decorators/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/decorators/RouterDecorator';
import 'app/styles/index.scss';

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
        ThemeDecorator('light'),
    ],
};

export default preview;
