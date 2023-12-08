import { StateSchema } from 'app/providers/StoreProvider';

export const getStateError = (state: StateSchema) => state?.login?.error;
