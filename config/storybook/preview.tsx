import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { RouterDecorator } from '@/shared/config/decorators/RouterDecorator';
import { SuspenseDecorator } from '@/shared/config/decorators/SuspenseDecorator';
import { ThemeDecorator } from '@/shared/config/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/ThemeProvider';

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
        ThemeDecorator(Theme.LIGHT),
    ],
};

export default preview;
