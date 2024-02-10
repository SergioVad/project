import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select/Select';
import { TSortOrder } from '@/shared/types/SortOrder';
import cls from './ArticleSortSelect.module.scss';
import { sortByEntities } from '../../model/const/const';

interface ArticleSortSelectProps {
    className?: string;
    orderSelect: TSortOrder;
    entitiesSelect: sortByEntities;
    onChangeOrderSelect: (value: TSortOrder) => void;
    onChangeEntitiesSelect: (value: sortByEntities) => void;
}

const orderSelectArray: SelectOption<TSortOrder>[] = [
    {
        value: 'asc',
        content: 'возврастанию',
    },
    {
        value: 'desc',
        content: 'убыванию',
    },
];

const entitiesSelectArray: SelectOption<sortByEntities>[] = [
    {
        value: sortByEntities.TITLE,
        content: 'заголовку',
    },
    {
        value: sortByEntities.VIEWS,
        content: 'просмотрам',
    },
    {
        value: sortByEntities.CREATED,
        content: 'созданию',
    },
];

export const ArticleSortSelect = memo((props: ArticleSortSelectProps) => {
    const {
        className, onChangeEntitiesSelect,
        onChangeOrderSelect, entitiesSelect, orderSelect,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleSortSelect, {}, [className])}>
            <Select<TSortOrder>
                options={orderSelectArray}
                label={t('Сортировать по')}
                value={orderSelect}
                onChange={onChangeOrderSelect}
            />
            <Select<sortByEntities>
                options={entitiesSelectArray}
                label={t('по')}
                value={entitiesSelect}
                onChange={onChangeEntitiesSelect}
                className={cls.select}
            />
        </div>
    );
});
