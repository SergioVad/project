import { StateSchema } from '@/app/providers/StoreProvider';
import { getStatePassword } from './getStatePassword';

describe('getStatePassword.test', () => {
    test('State Password', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                password: '123',
            },
        };
        expect(getStatePassword(state as StateSchema)).toEqual('123');
    });
    test('State undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getStatePassword(state as StateSchema)).toEqual('');
    });
});
