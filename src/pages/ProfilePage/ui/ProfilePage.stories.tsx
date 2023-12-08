import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/decorators/StoreDecorator';
import { ECurrency } from 'entities/Currency';
import { ECountry } from 'entities/Country';
import ProfilePage, { reducersProfilePage } from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfilePageSuccess: Story = {
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
                        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
                    },
                },
            },
            reducersProfilePage,
        ),
    ],
};
