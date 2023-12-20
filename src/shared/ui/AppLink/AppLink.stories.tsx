import { storiesOf, type Meta, type StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator';
import { Theme } from 'shared/contexts/theme/ThemeContext';
import { AppLink, AppLinkTheme } from './AppLink';

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

export const Primary: Story = {
    args: {
        children: 'TEST',
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'TEST',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const Secondary: Story = {
    args: {
        children: 'TEST',
        theme: AppLinkTheme.SECONDARY,
    },
};

export const SecondaryDark: Story = {
    args: {
        children: 'TEST',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
