import { StateSchema } from '@/app/providers/StoreProvider';
import { ECountry } from '@/entities/Country';
import { ECurrency } from '@/entities/Currency';
import { getProfileData } from './getProfileData';

const profile = {
    firstname: '12',
    lastname: 'Ульби2',
    age: 21,
    currency: ECurrency.RUB,
    country: ECountry.RUSSIA,
    city: 'Moscow',
    username: 'admin',
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
};

describe('getProfileData.test', () => {
    test('availability of test', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                profile,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(profile);
    });
    test('value undefined', () => {
        const state = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
