import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/decorators/ThemeDecorator';
import { Modal } from './Modal';

const meta = {
    title: 'Shared/Modal',
    component: Modal,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalPrimary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',
    },
};

export const ModalDark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
