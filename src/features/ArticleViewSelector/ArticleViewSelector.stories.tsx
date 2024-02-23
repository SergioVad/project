import type { Meta, StoryObj } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticlesView } from '../../entities/Article/model/const/const';

const meta = {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
    args: {
        view: ArticlesView.SMALL,
    },
};

export const Big: Story = {
    args: {
        view: ArticlesView.BIG,
    },
};
