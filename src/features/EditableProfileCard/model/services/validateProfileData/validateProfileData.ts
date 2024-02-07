import { IProfile } from 'entities/Profile';
import { ValidateErrors } from '../../const/const';

export const validateProfileData = (profile?: IProfile) => {
    if (!profile) {
        return [ValidateErrors.INCORRECT_DATA];
    }
    const { lastname, firstname, age } = profile;
    const errors: ValidateErrors[] = [];
    if (!firstname || !lastname) {
        errors.push(ValidateErrors.INCORRECT_USERNAME);
    }
    if (!age) {
        errors.push(ValidateErrors.INCORRECT_AGE);
    }
    return errors;
};
