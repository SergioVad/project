import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        value: 'Option_1',
        items: [
            { content: 'Option_1', value: 'Option_1' },
            { content: 'Option_2', value: 'Option_2' },
        ],
    },
};

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        value: 'Option_1',
        items: [
            { content: 'Option_1', value: 'Option_1' },
            { content: 'Option_2', value: 'Option_2' },
        ],
    },
};

export const TopRight: Story = {
    args: {
        direction: 'top right',
        value: 'Option_1',
        items: [
            { content: '1asfasfasf23', value: 'Option_1' },
            { content: 'Option_2', value: 'Option_2' },
        ],
    },
};

export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        value: 'Option_1',
        items: [
            { content: 'Option_1', value: 'Option_1' },
            { content: 'Option_2', value: 'Option_2' },
        ],
    },
};

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        value: 'Option_1',
        items: [
            { content: 'Option_1', value: 'Option_1' },
            { content: 'Option_2', value: 'Option_2' },
        ],
    },
};
