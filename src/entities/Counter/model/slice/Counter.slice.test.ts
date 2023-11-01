import { DeepPartial } from '@reduxjs/toolkit';
import { CounterActions, CounterReducer } from './Counter.slice';
import { CounterSchema } from '../types/CounterSchema';

describe('CounterSlice', () => {
    test('increment', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(
            CounterReducer(state as CounterSchema, CounterActions.increment()),
        ).toEqual({ value: 11 });
    });
    test('decrement', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(
            CounterReducer(state as CounterSchema, CounterActions.increment()),
        ).toEqual({ value: 9 });
    });
    test('test with empty state', () => {
        expect(
            CounterReducer(undefined, CounterActions.increment()),
        ).toEqual({ value: 1 });
    });
});
