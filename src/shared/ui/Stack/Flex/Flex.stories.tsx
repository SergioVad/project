import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta = {
    title: 'shared/Flex',
    component: Flex,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: (
            <>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </>
        ),
    },
};

export const FlexJustifyBeetween: Story = {
    args: {
        justify: 'between',
        children: (
            <>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </>
        ),
    },
};

export const DirectionColumn: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </>
        ),
    },
};

export const Gap16WithDirectionRow: Story = {
    args: {
        gap: '16',
        children: (
            <>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </>
        ),
    },
};

export const Gap16WithDirectionColumn: Story = {
    args: {
        direction: 'column',
        gap: '16',
        children: (
            <>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </>
        ),
    },
};
