import type { Meta, StoryObj } from '@storybook/react';
import { ForbiddenPage } from './ForbiddenPage';
import { ThemeDecorator } from '@/shared/config/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/ThemeProvider';

const meta = {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ForbiddenPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
