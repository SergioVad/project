import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextSize, TextTheme } from './Text';

const meta = {
    title: 'Shared/Text',
    component: Text,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleAndText : Story = {
    args: {
        title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',",
    },
};

export const OnlyTitle : Story = {
    args: {
        title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',",
    },
};

export const OnlyText : Story = {
    args: {
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',",
    },
};

export const ErrorOnlyTitle : Story = {
    args: {
        theme: TextTheme.ERROR,
        title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',",
    },
};

export const ErrorOnlyText : Story = {
    args: {
        theme: TextTheme.ERROR,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',",
    },
};

export const TitleAndTextL : Story = {
    args: {
        size: TextSize.L,
        title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',",
    },
};
