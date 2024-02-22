import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/decorators/ThemeDecorator';
import { PageError } from './PageError';

const meta = {
    title: 'Widgets/PageError',
    component: PageError,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};

export const DarkPage: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
