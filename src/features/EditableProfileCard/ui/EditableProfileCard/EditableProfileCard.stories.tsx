import type { Meta, StoryObj } from '@storybook/react';
import { EditableProfileCard, reducersProfilePage } from './EditableProfileCard';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecorator';
import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';
import { ValidateErrors } from '../../model/const/const';

const meta = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [
        StoreDecorator(
            {
                profile: {
                    form: {
                        firstname: '12',
                        lastname: 'Ульби2',
                        age: 21,
                        currency: ECurrency.USD,
                        country: ECountry.USA,
                        city: 'Moscow',
                        username: 'admin',
                    },
                },
            },
            reducersProfilePage,
        ),
    ],
};

export const IsLoading: Story = {
    decorators: [
        StoreDecorator(
            {
                profile: {
                    isLoading: true,
                },
            },
            reducersProfilePage,
        ),
    ],
};

export const Error: Story = {
    decorators: [
        StoreDecorator(
            {
                profile: {
                    error: 'Ошибка',
                },
            },
            reducersProfilePage,
        ),
    ],
};

export const ValidateIncorrectUsername: Story = {
    decorators: [
        StoreDecorator(
            {
                profile: {
                    form: {
                        firstname: 'qwe',
                    },
                    validate: [ValidateErrors.INCORRECT_USERNAME],
                },
            },
            reducersProfilePage,
        ),
    ],
};
