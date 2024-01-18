import type { Meta, StoryObj } from '@storybook/react';
import { CommentsList } from './CommentsList';

const meta = {
    title: 'Entities/CommentsList',
    component: CommentsList,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof CommentsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello world',
                user: { id: '1', username: 'Vasya' },
            },
            {
                id: '2',
                text: 'Comment 2',
                user: { id: '1', username: 'Petya' },
            },
        ],
    },
};
