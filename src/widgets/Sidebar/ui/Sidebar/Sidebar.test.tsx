import { fireEvent, screen } from '@testing-library/react';
import { RenderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Test clear theme', () => {
        RenderComponent(<Sidebar />);
        const btn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(btn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
