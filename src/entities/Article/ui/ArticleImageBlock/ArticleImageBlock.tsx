import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text/Text';
import { IArticleimageBlock } from '../../model/types/Article';
import cls from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
    block: IArticleimageBlock;
    className?: string;
}

export const ArticleImageBlock = memo((props: ArticleImageBlockProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(cls.ArticleImageBlock, {}, [className])}>
            <img
                src={block.src}
                alt={block.src}
            />
            {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
        </div>
    );
});
