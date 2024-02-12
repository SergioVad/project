import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';
import { ThemeDecorator } from '@/shared/config/decorators/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme/ThemeContext';

const meta = {
    title: 'entities/NotificationItem',
    component: NotificationItem,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        item: {
            id: '1',
            title: 'Уведомление 1',
            description: 'Произошло какое-то событие',
            userId: '1',
        },
    },
};

export const PrimaryDark: Story = {
    args: {
        item: {
            id: '1',
            title: 'Уведомление 1',
            description: 'Произошло какое-то событие',
            userId: '1',
        },
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
