import { createSelector } from '@reduxjs/toolkit';
import { getStateAuthData } from 'entities/User';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemInterface } from '../types/sidebarItems';
import AboutIcon from '../../assets/image/main.svg';
import MainIcon from '../../assets/image/about.svg';
import ProfileIcon from '../../assets/image/profile.svg';
import ArticlesIcon from '../../assets/image/articles.svg';

export const getSidebarItems = createSelector(
    getStateAuthData,
    (userData) => {
        const sidebarItemList: SidebarItemInterface[] = [
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
        ];
        if (userData?.id) {
            sidebarItemList.push(
                {
                    path: `${RoutePath[AppRoutes.PROFILE]}${userData.id}`,
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
            );
        }
        return sidebarItemList;
    },
);
