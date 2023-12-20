import { StateSchema } from 'app/providers/StoreProvider';

export const getStateInited = (state: StateSchema) => state.user._inited;
