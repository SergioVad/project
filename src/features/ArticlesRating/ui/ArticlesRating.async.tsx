import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { ArticlesRatingProps } from './ArticlesRating';

const ArticleRatingLazy = lazy(
    () => import('./ArticlesRating'),
);

export const ArticleRatingAsync = (props: ArticlesRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={140} />}>
            <ArticleRatingLazy {...props} />
        </Suspense>
    );
};
