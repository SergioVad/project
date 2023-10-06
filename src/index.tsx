import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'shared/contexts/theme/ThemeContext';
import 'shared/config/i18next/i18next';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { App } from './app/App';

const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
