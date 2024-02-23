import { createSelector } from '@reduxjs/toolkit';
import { getStateAuthData } from '@/entities/User';
import { SidebarItemInterface } from '../types/sidebarItems';
import AboutIcon from '../../assets/image/main.svg';
import MainIcon from '../../assets/image/about.svg';
import ProfileIcon from '../../assets/image/profile.svg';
import ArticlesIcon from '../../assets/image/articles.svg';
import {
    getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/const/route';

export const getSidebarItems = createSelector(
    getStateAuthData,
    (userData) => {
        const sidebarItemList: SidebarItemInterface[] = [
            {
                path: getRouteMain(),
                name: 'Главная',
                Icon: MainIcon,
            },
            {
                path: getRouteAbout(),
                name: 'О сайте',
                Icon: AboutIcon,
            },
        ];
        if (userData?.id) {
            sidebarItemList.push(
                {
                    path: getRouteProfile(userData.id),
                    name: 'Профайл',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    name: 'Статьи',
                    Icon: ArticlesIcon,
                    authOnly: true,
                },
            );
        }
        return sidebarItemList;
    },
);
