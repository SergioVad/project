import type { Meta, StoryObj } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ThemeDecorator } from '@/shared/config/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/ThemeProvider';
import { ArticlesView } from '../../model/const/const';

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

export const SmallDark: Story = {
    args: {
        view: ArticlesView.SMALL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Big: Story = {
    args: {
        view: ArticlesView.BIG,
    },
};

export const BigDark: Story = {
    args: {
        view: ArticlesView.BIG,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
