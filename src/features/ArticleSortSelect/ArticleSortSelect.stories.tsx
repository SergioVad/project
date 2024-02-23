import type { Meta, StoryObj } from '@storybook/react';
import { ArticleSortSelect } from './ArticleSortSelect';
import { sortByEntities } from '../../entities/Article/model/const/const';

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
