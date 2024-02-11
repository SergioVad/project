import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Card } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { ThemeDecorator } from '@/shared/config/decorators/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme/ThemeContext';

const meta = {
    title: 'shared/Popover',
    component: Popover,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        (Story) => (
            <div
                style={{
                    width: 100,
                    paddingLeft: 500,
                    paddingTop: 300,
                    paddingBottom: 300,
                }}
            >
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryBottomLeft: Story = {
    args: {
        children: (
            <Card>
                <Text title="title" text="description" />
            </Card>
        ),
        button: true,
        trigger: <button type="button">Click</button>,
        direction: 'bottom left',
    },
};

export const PrimaryBottomRight: Story = {
    args: {
        children: (
            <Card>
                <Text title="title" text="description" />
            </Card>
        ),
        button: true,
        trigger: <button type="button">Click</button>,
        direction: 'bottom right',
    },
};

export const PrimaryTopLeft: Story = {
    args: {
        children: (
            <Card>
                <Text title="title" text="description" />
            </Card>
        ),
        button: true,
        trigger: <button type="button">Click</button>,
        direction: 'top left',
    },
};

export const PrimaryTopRight: Story = {
    args: {
        children: (
            <Card>
                <Text title="title" text="description" />
            </Card>
        ),
        button: true,
        trigger: <button type="button">Click</button>,
        direction: 'top right',
    },
};

export const PrimaryBottomLeftDark: Story = {
    args: {
        children: (
            <Card>
                <Text title="title" text="description" />
            </Card>
        ),
        button: true,
        trigger: <button type="button">Click</button>,
        direction: 'top right',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
