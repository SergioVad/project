import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';

export enum ValidateErrors {
    INCORRECT_USERNAME = 'INCORRECT_USERNAME',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_DATA = 'INCORRECT_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface IProfile {
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: ECurrency;
    country?: ECountry;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    profile?: IProfile;
    form?: IProfile;
    error?: string;
    isLoading: boolean;
    readonly: boolean;
    validate?: ValidateErrors[];
}
