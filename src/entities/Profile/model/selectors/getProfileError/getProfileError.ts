import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from '../../slice/Profile.slice';

export const getProfileError = (state: StateSchema) => state.profile?.error;
