import { createSelector } from '@reduxjs/toolkit';
import { IProfile } from '@/entities/Profile';
import { User, getStateAuthData } from '@/entities/User';
import { getProfileData } from '../getProfileData/getProfileData';

export const getCompareByIdUsers = createSelector(
    [getStateAuthData, getProfileData],
    (authData?: User, profile?: IProfile) => authData?.id === profile?.id,
);
