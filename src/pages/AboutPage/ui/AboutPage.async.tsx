import { ComponentType, lazy } from 'react';
import { AboutPageProps } from './AboutPage';

export const AboutPageAsync = lazy<ComponentType<AboutPageProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 400);
}));
