import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AddCommentFormSchema } from '../types/AddCommentForm';

export const initialState: AddCommentFormSchema = {
    text: '',
};

export const addCommentForm = createSlice({
    name: 'addCommentForm.slice',
    initialState,
    reducers: {
        setText(state, action: PayloadAction<string>) {
            state.text = action.payload;
        },
    },
});

export const { actions: addCommentFormActions } = addCommentForm;
export const { reducer: addCommentFormReducer } = addCommentForm;
