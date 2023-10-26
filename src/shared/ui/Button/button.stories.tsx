import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Shared/Button',
    component: Button,
    parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        children: 'CHECK',
    },
};

export const Clear: Story = {
    args: {
        children: 'CHECK',
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearInverted: Story = {
    args: {
        children: 'CHECK',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const OutlineM: Story = {
    args: {
        children: 'CHECK',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M,
    },
};

export const OutlineL: Story = {
    args: {
        children: 'CHECK',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

export const OutlineXL: Story = {
    args: {
        children: 'CHECK',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const Background: Story = {
    args: {
        children: 'CHECK',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInventory: Story = {
    args: {
        children: 'CHECK',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.M,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.XL,
    },
};
