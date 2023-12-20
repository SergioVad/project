import type { Meta, StoryObj } from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta = {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TestComponent: Story = {
    args: {

    },
};
