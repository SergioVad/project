import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';

const meta = {
    title: 'Shared/Button',
    component: Button,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonPrimary: Story = {
    args: {
        children: 'CLICK',
    },
};

export const ButtonClear: Story = {
    args: {
        children: 'CLICK',
        theme: ButtonTheme.CLEAR,
    },
};

export const ButtonOutlineRed: Story = {
    args: {
        children: 'CLICK',
        theme: ButtonTheme.OUTLINE_RED,
    },
};

export const ButtonBackgroundInverted: Story = {
    args: {
        children: 'CLICK',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const ButtonSquareSizeM: Story = {
    args: {
        children: '>',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.M,
    },
};

export const ButtonSquareSizeL: Story = {
    args: {
        children: '>',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.L,
    },
};

export const ButtonSquareSizeXL: Story = {
    args: {
        children: '>',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.XL,
    },
};

export const ButtonDisabled: Story = {
    args: {
        children: 'Login',
        disabled: true,
    },
};

export const ButtonOutlineM: Story = {
    args: {
        children: 'CLICK',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M,
    },
};

export const ButtonOutlineL: Story = {
    args: {
        children: 'CLICK',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const ButtonOutlineXL: Story = {
    args: {
        children: 'CLICK',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};
