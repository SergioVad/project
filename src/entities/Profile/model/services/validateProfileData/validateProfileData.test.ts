import { IProfile, ValidateErrors } from '../../types/ProfileSchema';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData.test', () => {
    test('success', () => {
        const data: IProfile = {
            firstname: 'Sergey',
            lastname: 'Ivanov',
            age: 20,
        };
        expect(validateProfileData(data)).toEqual([]);
    });
    test('INCORRECT_USERNAME', () => {
        const data: IProfile = {
            firstname: '',
            lastname: '',
            age: 21,
        };
        expect(validateProfileData(data)).toEqual([ValidateErrors.INCORRECT_USERNAME]);
    });
    test('INCORRECT_AGE', () => {
        const data: IProfile = {
            firstname: 'Sergey',
            lastname: 'Ivanov',
        };
        expect(validateProfileData(data)).toEqual([ValidateErrors.INCORRECT_AGE]);
    });
    test('INCORRECT_AGE', () => {
        expect(validateProfileData(undefined)).toEqual([ValidateErrors.INCORRECT_DATA]);
    });
    test('INCORRECT_USERNAME', () => {
        const data: IProfile = {
            firstname: '',
            lastname: '',
        };
        expect(validateProfileData(data)).toEqual([ValidateErrors.INCORRECT_USERNAME, ValidateErrors.INCORRECT_AGE]);
    });
});
