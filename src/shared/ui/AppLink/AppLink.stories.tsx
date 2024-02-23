import { type Meta, type StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';

const meta = {
    title: 'Shared/AppLink',
    component: AppLink,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        to: '/',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppLinkPrimary: Story = {
    args: {
        children: 'TEST',
    },
};
