import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

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
