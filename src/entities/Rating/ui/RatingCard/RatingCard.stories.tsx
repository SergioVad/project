import type { Meta, StoryObj } from '@storybook/react';
import { RatingCard } from './RatingCard';

const meta = {
    title: 'layers/RatingCard',
    component: RatingCard,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {

    },
};
