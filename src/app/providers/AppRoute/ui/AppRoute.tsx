import { getStateAuthData } from 'entities/User';
import { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRoute = memo(() => {
    const isAuth = useSelector(getStateAuthData);

    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (route.AuthOnly && !isAuth) {
            return false;
        }
        return true;
    }), [isAuth]);
    return (
        <Routes>
            {routes.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-grow">
                                {element}
                            </div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
});
