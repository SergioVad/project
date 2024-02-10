import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { Icon } from '@/shared/ui/Icon/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { Article, IArticleTextBlock } from '../../model/types/Article';
import { ArticleBlocksType, ArticlesView } from '../../model/const/const';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticlesView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target,
    } = props;
    const { t } = useTranslation();
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
                    <AppLink
                        to={RoutePath.article_details + article.id}
                        target={target}
                    >
                        <Button
                            theme={ButtonTheme.OUTLINE}
                        >
                            {t('Читать далее...')}
                        </Button>
                    </AppLink>
                    {views}
                </div>
            </Card>
        );
    }
    return (
        <AppLink
            to={RoutePath.article_details + article.id}
            target={target}
        >
            <Card
                className={classNames('', {}, [className, cls[view]])}
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
        </AppLink>
    );
});
