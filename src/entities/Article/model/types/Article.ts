import { User } from 'entities/User';

export enum ArticleType {
    ALL = 'all',
    IT = 'IT',
    ECONOMICS = 'ECONOMICS',
    SCIENCE = 'SCIENCE'
}

export enum ArticleBlocksType {
    TEXT = 'TEXT',
    CODE= 'CODE',
    IMAGE= 'IMAGE'
}

export enum sortByEntities {
    TITLE = 'title',
    VIEWS = 'views',
    CREATED = 'createdAt',
}

export enum ArticlesView {
    BIG = 'BIG',
    SMALL = 'SMALL'
}

interface ArticleBlockBase {
    id: string;
    type: ArticleBlocksType,
}

export interface IArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlocksType.TEXT;
    title?: string;
    paragraphs: string[];
}

export interface IArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlocksType.CODE;
    code: string;
}

export interface IArticleimageBlock extends ArticleBlockBase {
    type: ArticleBlocksType.IMAGE;
    src: string;
    title: string;
}

export type ArticleBlock = IArticleTextBlock | IArticleCodeBlock | IArticleimageBlock

export interface Article {
    id: string;
    user: User;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[],
    blocks: ArticleBlock[]
}
