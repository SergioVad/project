import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@/shared/ui/Text/Text';
import { Card, CardTheme } from './Card';

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

export const CardOutlined: Story = {
    args: {
        children: <Text title="title" text="text" />,
        theme: CardTheme.OUTLINED,
    },
};
