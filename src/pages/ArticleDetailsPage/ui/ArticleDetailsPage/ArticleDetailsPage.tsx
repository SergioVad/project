import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page/Page';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/dynamicReducerLoader/dynamicReducerLoader';
import { ArticleRecommendationList } from 'features/ArticleRecommendationList';
import { ArticleComment } from 'features/ArticleComments';
import cls from './ArticleDetailsPage.module.scss';
import { AddCommentForArticle } from '../../model/services/AddCommentForArticle';
import {
    articleDetailsPageRecommendationsReducer,
}
    from '../../model/slices/articleDetailsPageRecommendations.slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

export interface ArticleDetailsPageProps {
  className?: string;
}

export const reducerArticleDetailsPage: ReducersList = {
    ArticleDetailsRecommendations: articleDetailsPageRecommendationsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('articles');
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const onSendComment = useCallback((text: string) => {
        dispatch(AddCommentForArticle(text));
    }, [dispatch]);
    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        );
    }
    return (
        <Page className={classNames('', {}, [className])}>
            <DynamicReducerLoader reducers={reducerArticleDetailsPage}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleRecommendationList />
                <ArticleComment id={id} onSendComment={onSendComment} />
            </DynamicReducerLoader>
        </Page>
    );
};

export default memo(ArticleDetailsPage);