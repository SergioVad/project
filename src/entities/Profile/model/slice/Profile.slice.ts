import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProfile, ProfileSchema } from '../types/ProfileSchema';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

export const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly(state, action: PayloadAction<boolean>) {
            state.readonly = action.payload;
        },
        updateData(state, action: PayloadAction<IProfile>) {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        cancelForm(state) {
            state.form = state.profile;
            state.readonly = true;
            state.validate = undefined;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
                state.isLoading = false;
                state.profile = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true;
                state.validate = undefined;
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
                state.isLoading = false;
                state.profile = action.payload;
                state.form = action.payload;
                state.readonly = true;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.validate = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
