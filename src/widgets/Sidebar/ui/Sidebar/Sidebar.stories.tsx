import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta = {
    title: 'Widgets/Sidebar',
    component: Sidebar,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimarySidebar: Story = {
    decorators: [
        StoreDecorator({
            user: {},
        }),
    ],
};

export const SidebarWithAuthData: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '1' },
            },
        }),
    ],
};
