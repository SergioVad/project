import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator';
import { Theme } from 'shared/contexts/theme/ThemeContext';
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

export const DarkTitleAndText : Story = {
    args: {
        title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkOnlyTitle : Story = {
    args: {
        title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkOnlyText : Story = {
    args: {
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorDarkTitleAndText : Story = {
    args: {
        theme: TextTheme.ERROR,
        title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorDarkOnlyTitle : Story = {
    args: {
        theme: TextTheme.ERROR,
        title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorDarkOnlyText : Story = {
    args: {
        theme: TextTheme.ERROR,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const TitleAndTextL : Story = {
    args: {
        size: TextSize.L,
        title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Id amet facilis quia aliquid, delectusmagnam quibusdam obcaecati officiisx provident dolor ut doloresipsam rerum sapiente quaerat non unde illum tempora.',",
    },
};
