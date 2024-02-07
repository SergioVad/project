export type TUserRole = 'USER' | 'ADMIN' |'MANAGER'

export interface User {
    id: string;
    username: string;
    role: TUserRole[];
    avatar?: string;
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
