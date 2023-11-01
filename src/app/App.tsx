/* eslint-disable react/button-has-type */
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useEffect, useRef, useState } from 'react';
import { AppRoute } from './providers/AppRoute';
import { useTheme } from '../shared/contexts/theme/useTheme';

export function App() {
    const { theme } = useTheme();
    const app = useRef(null);
    const [, setModal] = useState(false);
    useEffect(() => {
        setModal(true);
    }, []);
    return (
        <div ref={app} className={classNames('app', {}, [theme])}>
            <Navbar modal={app.current} />
            <div className="content-page">
                <Sidebar />
                <AppRoute />
            </div>
        </div>
    );
}
