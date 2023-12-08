import { StateSchema } from 'app/providers/StoreProvider';
import { getStateUsername } from './getStateUsername';

describe('getStateUsername.test', () => {
    test('State Username', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: 'admin',
            },
        };
        expect(getStateUsername(state as StateSchema)).toEqual('admin');
    });
    test('State undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getStateUsername(state as StateSchema)).toEqual('');
    });
});
