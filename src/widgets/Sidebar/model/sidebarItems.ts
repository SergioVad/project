import React, { SVGProps } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from '../assets/image/main.svg';
import MainIcon from '../assets/image/about.svg';
import ProfileIcon from '../assets/image/profile.svg';

export interface SidebarItemInterface {
    path: string;
    name: string;
    Icon: React.FC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemList: SidebarItemInterface[] = [
    {
        path: RoutePath.main,
        name: 'Главная',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        name: 'О сайте',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        name: 'Профайл',
        Icon: ProfileIcon,
        authOnly: true,
    },
];
