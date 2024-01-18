import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from 'app/providers/StoreProvider/config/stateSchema';
import { IProfile, ValidateErrors } from '../../types/ProfileSchema';

import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<ValidateErrors[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        const dataProfile = getProfileForm(getState());
        const validate = validateProfileData(dataProfile);
        if (validate.length) {
            return rejectWithValue(validate);
        }
        try {
            const response = await extra.api.put<IProfile>(`/profile/${dataProfile?.id}`, dataProfile);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return rejectWithValue([ValidateErrors.SERVER_ERROR]);
        }
    },
);
