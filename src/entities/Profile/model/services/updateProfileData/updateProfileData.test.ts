import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { ECurrency } from 'entities/Currency';
import { ECountry } from 'entities/Country';
import { IProfile, ValidateErrors } from '../../types/ProfileSchema';
import { updateProfileData } from './updateProfileData';

const data: IProfile = {
    firstname: '12',
    lastname: 'Ульби2',
    age: 21,
    currency: ECurrency.RUB,
    country: ECountry.RUSSIA,
    city: 'Moscow',
    username: 'admin',
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
};

describe('fetchProfileData.test', () => {
    test('success fetch data', async () => {
        const thunk = new TestAsyncThunk(
            updateProfileData,
            {
                profile: {
                    form: data,
                },
            },
        );
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const action = await thunk.callThunk();

        expect(action.meta.requestStatus).toBe('fulfilled');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(action.payload).toEqual(data);
    });
    test('error server', async () => {
        const thunk = new TestAsyncThunk(
            updateProfileData,
            {
                profile: {
                    form: data,
                },
            },
        );
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const action = await thunk.callThunk();

        expect(action.meta.requestStatus).toBe('rejected');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(action.payload).toEqual([ValidateErrors.SERVER_ERROR]);
    });
    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {});
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateErrors.INCORRECT_DATA,
        ]);
    });
    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {
                    ...data, firstname: '',
                },
            },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateErrors.INCORRECT_USERNAME,
        ]);
    });
});
