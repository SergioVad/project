import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { IProfile } from '@/entities/Profile';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData.test', () => {
    test('success fetch data', async () => {
        const data: IProfile = {
            firstname: 'Sergey',
        };
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const action = await thunk.callThunk('1');

        expect(action.meta.requestStatus).toBe('fulfilled');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(action.payload).toEqual(data);
    });
    test('error fetch data', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const action = await thunk.callThunk('1');

        expect(action.meta.requestStatus).toBe('rejected');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(action.payload).toBe('error');
    });
});
