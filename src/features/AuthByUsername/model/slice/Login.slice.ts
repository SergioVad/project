import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { LoginSchema } from '../types/loginSchema';
import { authByUsername } from '../services/AuthByUsername';

export const initialState : LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername(state, action: PayloadAction<string>) {
            state.username = action.payload;
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(authByUsername.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(authByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(authByUsername.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
