import { StateSchema } from 'app/providers/StoreProvider';

export const getStateUsername = (state: StateSchema) => state?.login?.username;
