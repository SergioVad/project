import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator';
import { Theme } from 'shared/contexts/theme/ThemeContext';
import { Sidebar } from './Sidebar';

const meta = {
    title: 'Widget/Sidebar',
    component: Sidebar,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkSidebar: Story = {};

export const LightSidebar: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
