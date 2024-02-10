import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/decorators/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme/ThemeContext';

const meta = {
    title: 'Shared/Input',
    component: Input,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputPrimary: Story = {
    args: {
        label: 'Ввести значение',
    },
};

export const InputDark: Story = {
    args: {
        label: 'Ввести значение',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
