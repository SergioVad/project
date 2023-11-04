import { StateSchema } from 'app/providers/StoreProvider';

export const getStatePassword = (state: StateSchema) => state?.login?.password;
