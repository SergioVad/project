import { IProfile } from 'entities/Profile';
import { ValidateErrors } from '../const/const';

export interface ProfileSchema {
    profile?: IProfile;
    form?: IProfile;
    error?: string;
    isLoading: boolean;
    readonly: boolean;
    validate?: ValidateErrors[];
}
