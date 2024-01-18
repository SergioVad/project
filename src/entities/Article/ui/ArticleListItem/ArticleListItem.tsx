import { classNames } from 'shared/lib/classNames/classNames';

import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
    Article, ArticleBlocksType, IArticleTextBlock, ArticlesView,
} from '../../model/types/Article';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticlesView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
    } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const typeArticles = <Text text={article.type.join(', ')} className={cls.types} />;
    const img = (
        <img
            src={article.img}
            className={cls.img}
            alt={article.title}
        />
    );
    const date = <Text text={article.createdAt} className={cls.date} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Img={EyeIcon} />
        </>
    );

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.articleDetails + article.id);
    }, [article.id, navigate]);

    if (view === ArticlesView.BIG) {
        const textBlock = article.blocks
            .find((item) => item.type === ArticleBlocksType.TEXT) as IArticleTextBlock;

        return (
            <Card className={classNames('', {}, [className, cls[view]])}>
                <div className={cls.header}>
                    <Avatar size={30} src={article.user.avatar} />
                    <Text text={article.user.username} className={cls.username} />
                    {date}
                </div>
                <Text
                    className={cls.title}
                    title={article.title}
                />
                {typeArticles}
                {img}
                {textBlock && (
                    <ArticleTextBlock
                        block={textBlock}
                        className={cls.textBlock}
                    />
                )}
                <div className={cls.footer}>
                    <Button
                        onClick={onOpenArticle}
                        theme={ButtonTheme.OUTLINE}
                    >
                        {t('Читать далее...')}
                    </Button>
                    {views}
                </div>
            </Card>
        );
    }
    return (
        <Card
            className={classNames('', {}, [className, cls[view]])}
            onClick={onOpenArticle}
        >
            <div className={cls.imageWrapper}>
                {img}
                {date}
            </div>
            <div className={cls.infoWrapper}>
                {typeArticles}
                {views}
            </div>
            <Text
                className={cls.title}
                text={article.title}
            />
        </Card>
    );
});
