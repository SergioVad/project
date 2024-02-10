import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { CommentsList, CommentsForm } from '@/entities/Comment';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/dynamicReducerLoader/dynamicReducerLoader';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { useGetArticleCommentsQuery } from '../api/ArticleCommentsApi';
import { getArticleCommentsText } from '../model/selectors/getArticleCommentsText';
import { ArticleCommentsActions, ArticleCommentsReducer } from '../model/slices/ArticleComments.slice';

interface ArticleCommentProps {
    id: string;
    onSendComment?: (value: string) => void;
}

export const reducerArticleComment: ReducersList = {
    ArticleComments: ArticleCommentsReducer,
};

export const ArticleComment = memo((props: ArticleCommentProps) => {
    const { id, onSendComment } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getArticleCommentsText);
    const { isError, isLoading, data: comments } = useGetArticleCommentsQuery(id);
    if (isError) {
        <div>
            {t('Ошибка загрузки комментариев')}
        </div>;
    }
    const onChangeText = useCallback((text: string) => {
        dispatch(ArticleCommentsActions.setText(text));
    }, [dispatch]);
    return (
        <DynamicReducerLoader reducers={reducerArticleComment} removeAfterUnmount>
            <VStack gap="4">
                <Text
                    size={TextSize.L}
                    title={t('Комментарии')}
                />
                <CommentsForm
                    text={text}
                    onChange={onChangeText}
                    onSendComment={onSendComment}
                />
                {comments && <CommentsList isLoading={isLoading} comments={comments} />}
            </VStack>
        </DynamicReducerLoader>
    );
});
