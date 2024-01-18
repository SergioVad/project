import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { CommentsList } from 'entities/Comment';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/dynamicReducerLoader/dynamicReducerLoader';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { fetchArticleComments } from '../model/services/fetchArticleComments';
import { ArticleCommentListReducer, getArticleComments } from '../model/slices/ArticleCommentList.slice';
import {
    getArticleCommentListError,
    getArticleCommentListLoading,
} from '../model/selectors/ArticleCommentList';

interface ArticleCommentListProps {
    id: string;
}

export const reducerArticleCommentList: ReducersList = {
    ArticleCommentList: ArticleCommentListReducer,
};

export const ArticleCommentList = memo((props: ArticleCommentListProps) => {
    const { id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (__PROJECT__ === 'frontend') {
            dispatch(fetchArticleComments(id));
        }
    }, [dispatch, id]);
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentListLoading);
    const error = useSelector(getArticleCommentListError);
    if (error) {
        <div>
            {t('Ошибка загрузки комментариев')}
        </div>;
    }
    return (
        <DynamicReducerLoader reducers={reducerArticleCommentList} removeAfterUnmount>
            <CommentsList isLoading={isLoading} comments={comments} />
        </DynamicReducerLoader>
    );
});
