import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from '../../slice/Profile.slice';

export const getProfileLoading = (state: StateSchema) => state.profile?.isLoading;
