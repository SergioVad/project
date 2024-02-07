import { StateSchema } from 'app/providers/StoreProvider';
import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('availability of test', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'true',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('true');
    });
    test('value undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
