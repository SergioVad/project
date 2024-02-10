import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@/shared/ui/Text/Text';
import { Card, CardTheme } from './Card';
import { ThemeDecorator } from '@/shared/config/decorators/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme/ThemeContext';

const meta = {
    title: 'shared/Card',
    component: Card,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardPrimary: Story = {
    args: {
        children: <Text title="title" text="text" />,
    },
};

export const CardPrimaryDark: Story = {
    args: {
        children: <Text title="title" text="text" />,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const CardOutlined: Story = {
    args: {
        children: <Text title="title" text="text" />,
        theme: CardTheme.OUTLINED,
    },
};

export const CardOutlinedDark: Story = {
    args: {
        children: <Text title="title" text="text" />,
        theme: CardTheme.OUTLINED,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
