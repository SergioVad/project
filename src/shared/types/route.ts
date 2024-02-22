import { RouteProps } from 'react-router-dom';
// TODO
// eslint-disable-next-line sergio-plugin/available-layers
import { TUserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
    AuthOnly?: boolean;
    roles?: TUserRole[];
}
