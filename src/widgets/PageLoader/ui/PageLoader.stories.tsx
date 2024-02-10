import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/decorators/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme/ThemeContext';
import { PageLoader } from './PageLoader';

const meta = {
    title: 'Widget/PageLoader',
    component: PageLoader,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};

export const DarkPage: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
