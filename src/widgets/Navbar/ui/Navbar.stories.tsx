import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/decorators/StoreDecorator';
import { Navbar } from './Navbar';

const meta = {
    title: 'Widget/Navbar',
    component: Navbar,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [StoreDecorator({
        user: {},
    })],
};

export const PrimaryWithotAuthData: Story = {
    decorators: [StoreDecorator({
        user: {
            authData: {},
        },
    })],
};
