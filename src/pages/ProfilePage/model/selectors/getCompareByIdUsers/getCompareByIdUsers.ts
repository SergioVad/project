import { createSelector } from '@reduxjs/toolkit';
import { IProfile, getProfileData } from 'entities/Profile';
import { User, getStateAuthData } from 'entities/User';

export const getCompareByIdUsers = createSelector(
    [getStateAuthData, getProfileData],
    (authData?: User, profile?: IProfile) => authData?.id === profile?.id,
);
