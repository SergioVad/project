import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/dynamicReducerLoader/dynamicReducerLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/date.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import {
    getArticleData,
    getArticleError,
    getArticleLoading,
} from '../../model/selectors/getArticleSelectors';
import { ArticleDetailsReducer } from '../../model/slice/ArticleDetails.slice';
import cls from './ArticleDetails.module.scss';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleBlock } from '../../model/types/Article';
import { ArticleBlocksType } from '../../model/const/const';
import { AppImage } from '@/shared/ui/AppImage/AppImage';

interface ArticleDetailsProps {
  className?: string;
  id: string
}

export const reducerArticleDetails: ReducersList = {
    ArticleDetails: ArticleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('articles');
    const article = useSelector(getArticleData);
    const error = useSelector(getArticleError);
    const isLoading = useSelector(getArticleLoading);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (__PROJECT__ === 'frontend') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);
    const blocksType = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlocksType.TEXT:
            return <ArticleTextBlock key={block.id} className={cls.block} block={block} />;
        case ArticleBlocksType.CODE:
            return <ArticleCodeBlock key={block.id} className={cls.block} block={block} />;
        case ArticleBlocksType.IMAGE:
            return <ArticleImageBlock key={block.id} className={cls.blockImage} block={block} />;
        default:
            return null;
        }
    }, []);
    let content;
    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи.')}
            />
        );
    } else if (article) {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <AppImage
                        fallback={
                            <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                        }
                        src={article.img}
                        size={200}
                        className={cls.avatar}
                        round
                    />
                </div>
                <Text
                    className={cls.title}
                    title={article.title}
                    text={article.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon Img={EyeIcon} className={cls.icon} />
                    <Text text={String(article.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Img={CalendarIcon} className={cls.icon} />
                    <Text text={article.createdAt} />
                </div>
                {article.blocks.map((item) => blocksType(item))}
            </>
        );
    }
    return (
        <DynamicReducerLoader reducers={reducerArticleDetails} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicReducerLoader>
    );
});
