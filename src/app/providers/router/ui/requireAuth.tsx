import { useSelector } from 'react-redux';
import { TUserRole, getStateAuthData, getStateUserRole } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useMemo } from 'react';

interface RequireAuthProps {
    children : JSX.Element;
    roles?: TUserRole[];
}

export function RequireAuth(props: RequireAuthProps) {
    const { children, roles } = props;
    const auth = useSelector(getStateAuthData);
    const location = useLocation();
    const userRoles = useSelector(getStateUserRole);
    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    return children;
}