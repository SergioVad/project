import { RenderComponent } from 'shared/lib/renderComponent/renderComponent';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

const user = userEvent.setup();

describe('Counter.test', () => {
    test('test component', () => {
        RenderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    });
    test('test increment', async () => {
        RenderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
        await user.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
    });
    test('test decrement', async () => {
        RenderComponent(<Counter />, { initialState: { counter: { value: 10 } } });
        await user.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
    });
});
