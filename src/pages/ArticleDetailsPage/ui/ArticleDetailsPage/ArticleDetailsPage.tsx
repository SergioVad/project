import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleCommentList } from 'features/ArticleCommentList';
import { AddCommentForm } from 'features/addCommentForm/ui/addComentForm/addCommentForm';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page/Page';

import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { getArticlesView } from 'pages/ArticlesPage/model/selectors/ArticlesPageSelectors';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/dynamicReducerLoader/dynamicReducerLoader';
import cls from './ArticleDetailsPage.module.scss';
import { AddCommentForArticle } from '../../model/services/AddCommentForArticle';
import {
    articleDetailsPageRecommendationsReducer,
    getArticleRecommendations,
}
    from '../../model/slices/articleDetailsPageRecommendations.slice';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { fetchArticleRecommendations }
    from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
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
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const view = useSelector(getArticlesView);
    const onSendComment = useCallback((text: string) => {
        dispatch(AddCommentForArticle(text));
    }, [dispatch]);
    useInitialEffect(() => {
        dispatch(fetchArticleRecommendations());
    });
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
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t('Рекомендуем')}
                />
                <ArticleList
                    view={view}
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={cls.recommendations}
                    target="_blank"
                />
                <Text
                    size={TextSize.L}
                    className={cls.headerComments}
                    title={t('Комментарии')}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <ArticleCommentList id={id} />
            </DynamicReducerLoader>
        </Page>
    );
};

export default memo(ArticleDetailsPage);
