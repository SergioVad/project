import { StateSchema } from 'app/providers/StoreProvider';

export const getStateAuthData = (state: StateSchema) => state.user.authData;
