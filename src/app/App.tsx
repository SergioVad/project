import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getStateInited, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { useTheme } from '../shared/contexts/theme/useTheme';
import { AppRoute } from './providers/router';

export function App() {
    const dispatch = useAppDispatch();
    const inited = useSelector(getStateInited);
    const { theme } = useTheme();
    const app = useRef(null);
    const [, setModal] = useState(false);
    useEffect(() => {
        const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        // 2 Ререндер для модалки из body в app
        setModal(true);
        if (userData) {
            dispatch(userActions.getAuthData(JSON.parse(userData)));
        } else {
            dispatch(userActions.getInited());
        }
    }, [dispatch]);
    return (
        <div ref={app} className={classNames('app', {}, [theme])}>
            <Navbar modal={app.current} />
            <div className="content-page">
                <Sidebar />
                {inited && <AppRoute />}
            </div>
        </div>
    );
}
