import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../slice/Login.slice';

export const getStatePassword = (state: StateSchema) => state?.login?.password || initialState.password;
