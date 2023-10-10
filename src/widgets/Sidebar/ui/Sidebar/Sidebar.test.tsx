import { fireEvent, screen } from '@testing-library/react';
import { RenderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Sidebar render', () => {
        RenderWithTranslation(<Sidebar />);
        expect(screen.getByText('toggle')).toBeInTheDocument();
        screen.debug();
    });
    test('Test clear theme', () => {
        RenderWithTranslation(<Sidebar />);
        const btn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(btn);
        screen.debug();
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        screen.debug();
    });
});
