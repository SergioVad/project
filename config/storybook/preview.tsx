import type { Preview } from '@storybook/react';
import { ThemeDecorator } from '../../src/shared/config/decorators/ThemeDecorator';
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
        (Story) => (
            
        )
    ]
};

export default preview;
