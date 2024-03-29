import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleType, ArticlesView, sortByEntities,
} from '@/entities/Article';
import { TSortOrder } from '@/shared/types/SortOrder';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    view: ArticlesView;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;

    // filters
    order: TSortOrder;
    sort: sortByEntities;
    search: string;

    type: ArticleType;

    _inited: boolean;
}
