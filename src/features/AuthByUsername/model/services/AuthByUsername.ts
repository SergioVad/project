import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export interface authByUsernameProps {
    username: string;
    password: string;
}

export const authByUsername = createAsyncThunk<User, authByUsernameProps, ThunkConfig<string>>(
    'login/authByUsername',
    async (authData, thunkAPI) => {
        const { dispatch, rejectWithValue, extra } = thunkAPI;
        try {
            const response = await extra.api.post<User>('/login', authData);
            if (!response.data) {
                throw new Error();
            }
            dispatch(userActions.getAuthData(response.data));
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);
