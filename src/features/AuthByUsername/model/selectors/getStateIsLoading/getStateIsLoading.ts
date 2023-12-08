import { StateSchema } from 'app/providers/StoreProvider';

export const getStateIsLoading = (state: StateSchema) => state?.login?.isLoading;
