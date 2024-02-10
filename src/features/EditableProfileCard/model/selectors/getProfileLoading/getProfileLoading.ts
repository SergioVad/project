import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../slices/Profile.slice';

export const getProfileLoading = (state: StateSchema) => state.profile?.isLoading
|| initialState.isLoading;
