import { RouteProps } from 'react-router-dom';
import { TUserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
    AuthOnly?: boolean;
    roles?: TUserRole[];
}
