import { ComponentType, lazy } from 'react';
import { ProfilePageProps } from './ProfilePage';

export const ProfilePageAsync = lazy<ComponentType<ProfilePageProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
