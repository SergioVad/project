import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRoute } from './providers/AppRoute';
import { useTheme } from '../shared/contexts/theme/useTheme';

export function App() {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRoute />
            </div>
        </div>
    );
}
