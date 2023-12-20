import React, { SVGProps } from 'react';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from '../assets/image/main.svg';
import MainIcon from '../assets/image/about.svg';
import ProfileIcon from '../assets/image/profile.svg';
import ArticlesIcon from '../assets/image/articles.svg';

export interface SidebarItemInterface {
    path: string;
    name: string;
    Icon: React.FC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemList: SidebarItemInterface[] = [
    {
        path: RoutePath[AppRoutes.MAIN],
        name: 'Главная',
        Icon: MainIcon,
    },
    {
        path: RoutePath[AppRoutes.ABOUT],
        name: 'О сайте',
        Icon: AboutIcon,
    },
    {
        path: RoutePath[AppRoutes.PROFILE],
        name: 'Профайл',
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: RoutePath[AppRoutes.ARTICLES],
        name: 'Статьи',
        Icon: ArticlesIcon,
        authOnly: true,
    },
];
