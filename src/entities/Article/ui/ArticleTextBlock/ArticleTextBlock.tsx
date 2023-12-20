import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { IArticleTextBlock } from '../../model/types/Article';
import cls from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
  block: IArticleTextBlock;
  className?: string;
}

export const ArticleTextBlock = memo((props: ArticleTextBlockProps) => {
    const { className, block } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleTextBlock, {}, [className])}>
            {block.title && <Text title={block.title} className={cls.title} />}
            {block.paragraphs.map((paragraph) => (
                <Text key={paragraph} text={paragraph} className={cls.paragraph} />
            ))}
        </div>
    );
});
