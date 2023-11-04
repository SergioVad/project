import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { CounterActions } from '../model/slice/Counter.slice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
    className?: string;
}

export const Counter = ({ className }: CounterProps) => {
    const { t } = useTranslation();
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
            <div data-testid="counter-value">{counter}</div>
            <button data-testid="increment-btn" type="button" onClick={increment}>
                {t('increment')}
            </button>
            <button data-testid="decrement-btn" type="button" onClick={decrement}>
                {t('decrement')}
            </button>
        </div>
    );
};
