import { useDispatch, useSelector } from 'react-redux';
import { CounterActions } from '../model/slice/Counter.slice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
    className?: string;
}

export const Counter = ({ className }: CounterProps) => {
    const dispatch = useDispatch();
    const counter = useSelector(getCounterValue);
    const increment = () => {
        dispatch(CounterActions.increment());
    };
    const decrement = () => {
        dispatch(CounterActions.decrement());
    };
    return (
        <div>
            <div data-testId="counter-value">{counter}</div>
            <button data-testId="increment-btn" type="button" onClick={increment}>
                increment
            </button>
            <button data-testId="decrement-btn" type="button" onClick={decrement}>
                decrement
            </button>
        </div>
    );
};
