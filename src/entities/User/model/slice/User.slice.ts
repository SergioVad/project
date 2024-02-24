import type { PayloadAction } from '@reduxjs/toolkit';
import type { User, UserSchema } from '../types/UserSchema';
import { buildSlice } from '@/shared/lib/store';

const initialState : UserSchema = {
    authData: undefined,
    _inited: false,
};

const userSlice = buildSlice({
    name: 'user',
    initialState,
    reducers: {
        getAuthData(state, action: PayloadAction<User>) {
            state.authData = action.payload;
            state._inited = true;
        },
        getInited(state) {
            state._inited = true;
        },
        logout(state) {
            state.authData = undefined;
        },
    },
});

export const {
    actions: userActions,
    reducer: userReducer,
    useActions: useUserActions,
} = userSlice;
