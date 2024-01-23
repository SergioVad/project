import { createSelector } from '@reduxjs/toolkit';
import { getStateAuthData } from 'entities/User';
import { getArticleData } from 'entities/Article';

export const getCanEditArticle = createSelector(
    getArticleData,
    getStateAuthData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }

        return article.user.id === user.id;
    },
);
