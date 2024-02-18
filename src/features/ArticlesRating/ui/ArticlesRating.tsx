import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RatingCard } from '@/entities/Rating';
import { useArticlesRating, usePostArticlesRating } from '../api/ArticlesRatingApi';
import { getStateAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticlesRatingProps {
    className?: string;
    articleId: string;
}

const ArticlesRating = memo((props: ArticlesRatingProps) => {
    const { className, articleId } = props;
    const userData = useSelector(getStateAuthData);
    const { data, isLoading } = useArticlesRating({
        userId: userData?.id ?? '',
        articleId,
    });
    const [rateArticleMutation] = usePostArticlesRating();
    const rate = data?.[0];
    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);
    if (isLoading) {
        <Skeleton width="100%" height={120} />;
    }
    return (
        <div className={classNames('', {}, [className])}>
            <RatingCard
                rate={rate?.rate}
                className={className}
                title="Поставьте оценку"
                feedbackTitle="Оставьте отзыв"
                hasFeedback
                onAccept={onAccept}
                onCancel={onCancel}
            />
        </div>
    );
});

export default ArticlesRating;
