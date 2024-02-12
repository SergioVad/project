import type { Meta, StoryObj } from '@storybook/react';
import { ProfilePageHeader } from './ProfilePageHeader';
import { StoreDecorator } from '@/shared/config/decorators/StoreDecorator';
import { reducersProfilePage } from '../EditableProfileCard/EditableProfileCard';

const meta = {
    title: 'features/ProfilePageHeader',
    component: ProfilePageHeader,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ProfilePageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    decorators: [
        StoreDecorator(
            {
                user: {
                    authData: {
                        id: '1',
                        username: 'Sergey',
                        role: ['USER'],
                    },
                },
                profile: {
                    profile: {
                        id: '1',
                        firstname: 'Sergey',
                        age: 28,
                    },
                },
            },
            reducersProfilePage,
        ),
    ],
};
