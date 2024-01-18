import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/decorators/StoreDecorator';
import { AddCommentForm, reducersAddCommentForm } from './addCommentForm';

const meta = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TestComponent: Story = {
    decorators: [
        StoreDecorator({
            addCommentForm: {
                text: 'CHECK',
            },
        }, reducersAddCommentForm),
    ],
};
