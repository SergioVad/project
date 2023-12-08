import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'shared/contexts/theme/ThemeContext';
import 'shared/config/i18next/i18next';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { App } from './app/App';
import 'app/styles/index.scss';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDom.createRoot(rootElement);
    root.render(
        <BrowserRouter>
            <StoreProvider>
                <ErrorBoundary>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
            </StoreProvider>
        </BrowserRouter>,
    );
}
