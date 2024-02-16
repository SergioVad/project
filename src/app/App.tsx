import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getStateInited, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '../shared/contexts/theme/useTheme';
import { AppRoute } from './providers/router';

export function App() {
    const dispatch = useAppDispatch();
    const inited = useSelector(getStateInited);
    const { theme } = useTheme();
    useEffect(() => {
        const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        if (userData) {
            dispatch(userActions.getAuthData(JSON.parse(userData)));
        } else {
            dispatch(userActions.getInited());
        }
    }, [dispatch]);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                {inited && <AppRoute />}
            </div>
        </div>
    );
}
