import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

const meta = {
    title: 'shared/Tabs',
    component: Tabs,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        tabs: [
            {
                value: 'tab 1',
                content: 'tab 1',
            },
            {
                value: '2',
                content: 'tab 2',
            },
            {
                value: '3',
                content: 'tab 3',
            },
        ],
        value: 'tab 1',
        onTabClick: action('onTabClick'),
    },
};
