import { Suspense, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './requireAuth';
import { routeConfig } from '../config/routeConfig';
import { AppRoutesProps } from '@/shared/types/route';

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
            element={route.AuthOnly
                ? <RequireAuth roles={route.roles}>{element}</RequireAuth>
                : element}
        />
    );
};

export const AppRoute = memo(() => (
    <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
));
