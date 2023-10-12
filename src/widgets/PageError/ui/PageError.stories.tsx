import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator';
import { Theme } from 'shared/contexts/theme/ThemeContext';
import { PageError } from './PageError';

const meta = {
    title: 'Widget/PageError',
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
