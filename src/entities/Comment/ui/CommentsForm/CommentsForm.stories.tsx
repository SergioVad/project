import type { Meta, StoryObj } from '@storybook/react';
import { CommentsForm } from './CommentsForm';

const meta = {
    title: 'Entities/Comment/CommentsForm',
    component: CommentsForm,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof CommentsForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
