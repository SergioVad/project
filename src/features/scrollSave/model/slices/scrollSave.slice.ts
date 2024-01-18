import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IScrollSaveSchema } from '../types/scrollSave';

const initialState: IScrollSaveSchema = {
    scroll: {},
};

export const scrollSavelice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScroll: (state, { payload }: PayloadAction<{path: string, position: number}>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollSaveActions } = scrollSavelice;
export const { reducer: scrollSaveReducer } = scrollSavelice;
