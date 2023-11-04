import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User, UserSchema } from '../types/UserSchema';

const initialState : UserSchema = {
    authData: undefined,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getAuthData(state, action: PayloadAction<User>) {
            state.authData = action.payload;
        },
        logout(state) {
            state.authData = undefined;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
