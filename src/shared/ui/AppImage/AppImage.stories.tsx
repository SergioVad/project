import type { Meta, StoryObj } from '@storybook/react';
import { AppImage } from './AppImage';

const meta = {
    title: 'layers/AppImage',
    component: AppImage,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AppImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {

    },
};
