import {
    Suspense, memo,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig, AppRoutesProps } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './requireAuth';

const renderWithWrapper = (route: AppRoutesProps) => {
    const element = (
        <Suspense fallback={<PageLoader />}>
            {route.element}
        </Suspense>
    );
    return (
        <Route
            key={route.path}
            path={route.path}
            element={route.AuthOnly ? <RequireAuth>{element}</RequireAuth> : element}
        />
    );
};

export const AppRoute = memo(() => (
    <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
));
