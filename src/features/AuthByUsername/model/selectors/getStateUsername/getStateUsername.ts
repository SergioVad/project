import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../slice/Login.slice';

export const getStateUsername = (state: StateSchema) => state?.login?.username || initialState.username;
