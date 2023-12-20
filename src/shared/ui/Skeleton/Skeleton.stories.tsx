import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator';
import { Theme } from 'shared/contexts/theme/ThemeContext';
import { Skeleton } from './Skeleton';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        height: 200,
        width: '100%',
    },
};

export const Circle: Story = {
    args: {
        height: 100,
        width: 100,
        border: '50%',
    },
};

export const NormalDark: Story = {
    args: {
        height: 200,
        width: '100%',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const CircleDark: Story = {
    args: {
        height: 100,
        width: 100,
        border: '50%',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
