// import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page/Page';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/dynamicReducerLoader/dynamicReducerLoader';
import { ArticleRecommendationList } from '@/features/ArticleRecommendationList';
import { ArticleComment } from '@/features/ArticleComments';
import cls from './ArticleDetailsPage.module.scss';
import { AddCommentForArticle } from '../../model/services/AddCommentForArticle';
import {
    articleDetailsPageRecommendationsReducer,
}
    from '../../model/slices/articleDetailsPageRecommendations.slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticlesRating } from '@/features/ArticlesRating';

export interface ArticleDetailsPageProps {
  className?: string;
}

export const reducerArticleDetailsPage: ReducersList = {
    ArticleDetailsRecommendations: articleDetailsPageRecommendationsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    // const { t } = useTranslation('articles');
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const onSendComment = useCallback((text: string) => {
        dispatch(AddCommentForArticle(text));
    }, [dispatch]);
    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                Статья не найдена
                {/* {t('Статья не найдена')} */}
            </Page>
        );
    }
    return (
        <Page className={classNames('', {}, [className])}>
            <DynamicReducerLoader reducers={reducerArticleDetailsPage}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticlesRating articleId={id} />
                <ArticleRecommendationList />
                <ArticleComment id={id} onSendComment={onSendComment} />
            </DynamicReducerLoader>
        </Page>
    );
};

export default memo(ArticleDetailsPage);
