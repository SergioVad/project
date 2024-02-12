import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCodeBlock } from './ArticleCodeBlock';
import { IArticleCodeBlock } from '../../model/types/Article';
import { ArticleBlocksType } from '../../model/const/const';
import { ThemeDecorator } from '@/shared/config/decorators/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme/ThemeContext';

const meta = {
    title: 'entities/article/ArticleCodeBlock',
    component: ArticleCodeBlock,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof ArticleCodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const codeBlock: IArticleCodeBlock = {
    id: '4',
    type: ArticleBlocksType.CODE,
    code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
};

export const Primary: Story = {
    args: {
        block: codeBlock,
    },
};

export const PrimaryDark: Story = {
    args: {
        block: codeBlock,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
