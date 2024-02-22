import axios, { AxiosStatic } from 'axios';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectedValue> =
    (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue }>

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    constructor(
        actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
        state?: DeepPartial<StateSchema>,
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);
        this.api = mockedAxios;
    }

    async callThunk(arg: Arg) {
        const actionCreator = this.actionCreator(arg);
        const action = await actionCreator(
            this.dispatch,
            this.getState,
            { api: this.api },
        );
        return action;
    }
}
