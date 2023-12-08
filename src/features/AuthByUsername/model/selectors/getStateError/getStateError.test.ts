import { StateSchema } from 'app/providers/StoreProvider';
import { getStateError } from './getStateError';

describe('getStateError.test', () => {
    test('State Error', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                error: 'Error',
            },
        };
        expect(getStateError(state as StateSchema)).toEqual('Error');
    });
    test('State undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getStateError(state as StateSchema)).toEqual(undefined);
    });
});
