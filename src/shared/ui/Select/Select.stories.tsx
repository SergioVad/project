import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectOption } from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options: SelectOption[] = [
    { content: 'Value №1', value: 'Value №1' },
    { content: 'Value №2', value: 'Value №2' },
    { content: 'Value №3', value: 'Value №3' },
];

export const TestComponent: Story = {
    args: {
        label: 'Test',
        options,
    },
};
