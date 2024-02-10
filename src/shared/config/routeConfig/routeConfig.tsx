import { RouteProps } from 'react-router-dom';
import { AboutPageAsync } from '@/pages/AboutPage';
import { ArticleDetailsPageAsync } from '@/pages/ArticleDetailsPage';
import { ArticlesPageAsync } from '@/pages/ArticlesPage';
import { MainPageAsync } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePageAsync } from '@/pages/ProfilePage';
import { ArticleEditPageAsync } from '@/pages/ArticleEditPage';
import { AdminPanelPageAsync } from '@/pages/AdminPanelPage';
import { TUserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',

    // last
    NOT_FOUND = 'not found',
}

export type AppRoutesProps = RouteProps & {
    AuthOnly?: boolean;
    roles?: TUserRole[];
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/',
    [AppRoutes.ARTICLE_CREATE]: '/articles/new',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',

    // last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPageAsync />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPageAsync />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath[AppRoutes.PROFILE]}:id`,
        element: <ProfilePageAsync />,
        AuthOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath[AppRoutes.ARTICLES],
        element: <ArticlesPageAsync />,
        AuthOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath[AppRoutes.ARTICLE_DETAILS]}:id`,
        element: <ArticleDetailsPageAsync />,
        AuthOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: `${RoutePath.article_create}`,
        element: <ArticleEditPageAsync />,
        AuthOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: RoutePath.article_edit,
        element: <ArticleEditPageAsync />,
        AuthOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: RoutePath[AppRoutes.ADMIN_PANEL],
        element: <AdminPanelPageAsync />,
        AuthOnly: true,
        roles: ['ADMIN', 'MANAGER'],
    },
    [AppRoutes.FORBIDDEN]: {
        path: RoutePath[AppRoutes.FORBIDDEN],
        element: <ForbiddenPage />,
    },

    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
};
