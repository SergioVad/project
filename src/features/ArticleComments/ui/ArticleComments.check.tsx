// import type { Meta, StoryObj } from '@storybook/react';
// import { ArticleComment, reducerArticleComment } from './ArticleComments';
// import { Comment } from '@/entities/Comment';
// import { StoreDecorator } from '@/shared/config/decorators/StoreDecorator';

// const comment: Comment = {
//     id: '1',
//     text: 'some comment',
//     user: {
//         id: '1',
//         role: ['ADMIN'],
//         username: 'admin',
//     },
// };

// const meta = {
//     title: 'features/ArticleComment',
//     component: ArticleComment,
//     parameters: {
//         mockData: [
//             {
//                 url: `${__API__}/comments?articleId=1&userId=1`,
//                 method: 'GET',
//                 status: 200,
//                 response: [
//                     { ...comment },
//                     { ...comment, id: '2' },
//                     { ...comment, id: '3' },
//                 ],
//             },
//         ],
//     },
//     tags: ['autodocs'],
//     argTypes: {},
// } satisfies Meta<typeof ArticleComment>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//     args: {
//         id: '1',
//     },
//     decorators: [
//         StoreDecorator(
//             {
//                 ArticleComments: {},
//             },
//             reducerArticleComment,
//         )],
// };
