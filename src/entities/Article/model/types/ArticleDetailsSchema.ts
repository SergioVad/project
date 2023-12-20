import { Article } from './Article';

export interface ArticleDetailsSchema {
    isLoading: boolean;
    data?: Article;
    error?: string
}
