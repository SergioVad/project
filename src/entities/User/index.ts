export { getStateAuthData } from './model/selectors/getStateAuthData';
export { getStateInited } from './model/selectors/getStateInited';
export { userReducer, userActions } from './model/slice/User.slice';
export type { UserSchema, User } from './model/types/UserSchema';
export { getStateIsAdminRole, getStateIsManagerRole } from './model/selectors/getStateUserRole';
export type { TUserRole } from './model/types/UserSchema';
export { getStateUserRole } from './model/selectors/getStateUserRole';
