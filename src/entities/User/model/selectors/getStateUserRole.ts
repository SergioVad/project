import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getStateUserRole = (state: StateSchema) => state.user.authData?.role;

export const getStateIsAdminRole = createSelector(
    getStateUserRole,
    (role) => role?.includes('ADMIN'),
);

export const getStateIsManagerRole = createSelector(
    getStateUserRole,
    (role) => role?.includes('MANAGER'),
);
