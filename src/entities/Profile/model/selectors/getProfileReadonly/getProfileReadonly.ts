import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from '../../slice/Profile.slice';

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;
