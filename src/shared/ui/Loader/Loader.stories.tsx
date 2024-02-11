import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';
import { ThemeDecorator } from '@/shared/config/decorators/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme/ThemeContext';

const meta = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoaderPrimary: Story = {};

export const LoaderDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
