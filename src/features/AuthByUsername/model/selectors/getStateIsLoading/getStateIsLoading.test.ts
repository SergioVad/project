import { StateSchema } from '@/app/providers/StoreProvider';
import { getStateIsLoading } from './getStateIsLoading';

describe('getStateLoading.test', () => {
    test('State Loading', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                isLoading: true,
            },
        };
        expect(getStateIsLoading(state as StateSchema)).toEqual(true);
    });
    test('State undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getStateIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
