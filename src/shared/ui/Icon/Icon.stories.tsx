import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import IconImage from './assets/storybook/eye.svg';

const meta = {
    title: 'shared/Icon',
    component: Icon,
    parameters: {

    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconPrimary: Story = {
    args: {
        Img: IconImage,
    },
};

export const IconInverted: Story = {
    args: {
        Img: IconImage,
        inverted: true,
    },
};
