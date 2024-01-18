import { ComponentType, lazy } from 'react';
import { ArticlesPageProps } from './ArticlesPage';

export const ArticlesPageAsync = lazy<ComponentType<ArticlesPageProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlesPage')), 400);
}));
