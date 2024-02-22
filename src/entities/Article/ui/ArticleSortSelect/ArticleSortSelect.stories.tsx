import type { Meta, StoryObj } from '@storybook/react';
import { ArticleSortSelect } from './ArticleSortSelect';
import { sortByEntities } from '../../model/const/const';
import { ThemeDecorator } from '@/shared/config/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/ThemeProvider';

const meta = {
    title: 'entities/Article/ArticleSortSelect',
    component: ArticleSortSelect,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof ArticleSortSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        orderSelect: 'asc',
        entitiesSelect: sortByEntities.CREATED,
    },
};

export const PrimaryDark: Story = {
    args: {
        orderSelect: 'asc',
        entitiesSelect: sortByEntities.CREATED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
