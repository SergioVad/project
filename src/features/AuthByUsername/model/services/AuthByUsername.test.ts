import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { authByUsername } from './AuthByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('AuthByUsername.test', () => {
    test('success auth', async () => {
        const dataUser = { username: '123', id: '1' };
        const thunk = new TestAsyncThunk(authByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: dataUser }));
        const action = await thunk.callThunk({ password: '123', username: '123' });

        expect(action.meta.requestStatus).toBe('fulfilled');
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.getAuthData(dataUser));
        expect(action.payload).toEqual(dataUser);
    });
    test('error login', async () => {
        const thunk = new TestAsyncThunk(authByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const action = await thunk.callThunk({ password: '123', username: '123' });

        expect(action.meta.requestStatus).toBe('rejected');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(action.payload).toBe('error');
    });
});

// let dispatch: Dispatch;
// let getState: () => StateSchema;
// beforeEach(() => {
//     dispatch = jest.fn();
//     getState = jest.fn();
// });
// test('success auth', async () => {
//     const dataUser = { username: '123', id: '1' };
//     mockedAxios.post.mockReturnValue(Promise.resolve({ data: dataUser }));
//     const actionCreator = authByUsername({ password: '123', username: '123' });
//     const action = await actionCreator(dispatch, getState, undefined);

//     expect(action.meta.requestStatus).toBe('fulfilled');
//     expect(dispatch).toHaveBeenCalledTimes(3);
//     expect(dispatch).toHaveBeenCalledWith(userActions.getAuthData(dataUser));
//     expect(action.payload).toEqual(dataUser);
// });
// test('error login', async () => {
//     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
// const actionCreator = authByUsername({ password: '123', username: '123' });
// const action = await actionCreator(dispatch, getState, undefined);

//     expect(action.meta.requestStatus).toBe('rejected');
//     expect(dispatch).toHaveBeenCalledTimes(2);
//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(action.payload).toBe('error');
// });
