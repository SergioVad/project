import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/ThemeProvider';
import LoginForm, { reducersLoginForm } from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SuccesfulLoginForm: Story = {
    decorators: [
        StoreDecorator(
            {
                login: {
                    username: 'admin',
                    password: '123',
                },
            },
            reducersLoginForm,
        )],
};

export const DarkSuccesfulLoginForm: Story = {
    decorators: [
        StoreDecorator(
            {
                login: {
                    username: 'admin',
                    password: '123',
                },
            },
            reducersLoginForm,
        ), ThemeDecorator(Theme.DARK)],
};

export const ErrorDarkLoginForm: Story = {
    decorators: [
        StoreDecorator(
            {
                login: {
                    username: 'admin',
                    password: '12',
                    error: 'Ошибка авторизации',
                },
            },
            reducersLoginForm,
        ), ThemeDecorator(Theme.DARK)],
};

export const LoadingDarkLoginForm: Story = {
    decorators: [
        StoreDecorator(
            {
                login: {
                    username: 'admin',
                    password: '123',
                    isLoading: true,
                },
            },
            reducersLoginForm,
        ), ThemeDecorator(Theme.DARK)],
};
