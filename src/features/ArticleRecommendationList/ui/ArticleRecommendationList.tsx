import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { useGetArticlesRecommendationsListQuery } from '../api/articleRecommendationApi';

interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList = memo(({ className }: ArticleRecommendationListProps) => {
    const { t } = useTranslation();
    const { data: articles } = useGetArticlesRecommendationsListQuery(4);
    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Рекомендуем')}
            />
            <ArticleList
                articles={articles}
                target="_blank"
            />
        </VStack>
    );
});
