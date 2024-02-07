// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Comment } from 'entities/Comment';
// import { getStateAuthData } from 'entities/User';
// import { fetchArticleComments } from 'features/ArticleCommentList/model/services/fetchArticleComments';
// import { ThunkConfig } from 'app/providers/StoreProvider';
// import { getArticleData } from 'entities/Article';

// export const AddCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
//     'articleDetails/AddCommentForArticle',
//     async (text, thunkAPI) => {
//         const {
//             rejectWithValue, extra, getState, dispatch,
//         } = thunkAPI;
//         const user = getStateAuthData(getState());
//         const article = getArticleData(getState());
//         if (!user || !article) {
//             return rejectWithValue('no data');
//         }
//         try {
//             const response = await extra.api.post<Comment>('/comments', {
//                 text,
//                 articleId: article.id,
//                 userId: user.id,
//             });

//             if (!response.data) {
//                 throw new Error();
//             }
//             dispatch(fetchArticleComments(article.id));
//             return response.data;
//         } catch (error) {
//             return rejectWithValue('error');
//         }
//     },
// );
