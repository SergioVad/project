import type { Meta, StoryObj } from '@storybook/react';
import { ECurrency } from 'entities/Currency';
import { ECountry } from 'entities/Country';
import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
    args: {
        dataProfile: {
            firstname: '12',
            lastname: 'Ульби2',
            age: 21,
            currency: ECurrency.USD,
            country: ECountry.USA,
            city: 'Moscow',
            username: 'admin',
            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        },
    },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileCardSuccess: Story = {};

export const ProfileCardError: Story = {
    args: {
        error: 'true',
    },
};

export const ProfileCardLoading: Story = {
    args: {
        isLoading: true,
    },
};
