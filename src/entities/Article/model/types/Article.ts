export enum ArticleType {
    IT = 'IT',
    ECONOMICS = 'ECONOMICS',
    SCIENCE = 'SCIENCE'
}

export enum ArticleBlocksType {
    TEXT = 'TEXT',
    CODE= 'CODE',
    IMAGE= 'IMAGE'
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
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[],
    blocks: ArticleBlock[]
}
