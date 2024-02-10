import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text/Text';
import { getArticlesPage } from '../../model/slices/ArticlesPage.slice';
import {
    getArticlesError,
    getArticlesIsLoading,
    getArticlesView,
} from '../../model/selectors/ArticlesPageSelectors';

interface ArticlesPageListProps {
    className?: string;
}

export const ArticlesPageList = memo((props: ArticlesPageListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const articles = useSelector(getArticlesPage.selectAll);
    const error = useSelector(getArticlesError);
    const isLoading = useSelector(getArticlesIsLoading);
    const view = useSelector(getArticlesView);
    if (error) {
        return (
            <Text title="Ошибка при загрузке статей" />
        );
    }
    return (
        <div className={classNames('', {}, [className])}>
            <ArticleList
                view={view}
                isLoading={isLoading}
                articles={articles}
            />
        </div>
    );
});
