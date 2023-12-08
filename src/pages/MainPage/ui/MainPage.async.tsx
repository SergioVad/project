import { ComponentType, lazy } from 'react';
import { MainPageProps } from './MainPage';

export const MainPageAsync = lazy<ComponentType<MainPageProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
