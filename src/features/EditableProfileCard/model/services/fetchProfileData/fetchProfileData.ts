import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<IProfile, string, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (id, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;
        try {
            const response = await extra.api.get<IProfile>(`/profile/${id}`);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
