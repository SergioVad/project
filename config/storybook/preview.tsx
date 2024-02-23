import 'app/styles/index.scss';
import { Preview } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/decorators/RouterDecorator';
import { SuspenseDecorator } from '@/shared/config/decorators/SuspenseDecorator';
import { ThemeDecorator } from '@/shared/config/decorators/ThemeGlobalDecorator';

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
        SuspenseDecorator,
        RouterDecorator(),
        ThemeDecorator(),
    ],
};

export default preview;
