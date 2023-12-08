import { IProfile, ProfileSchema, ValidateErrors } from '../types/ProfileSchema';
import { profileActions, profileReducer } from './Profile.slice';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: DeepPartial<IProfile> = {
    firstname: '12',
    lastname: 'Ульби2',
    age: 21,
};

describe('Profile.slice.test', () => {
    test('with readonly', () => {
        const profile: DeepPartial<ProfileSchema> = {
            readonly: false,
        };

        expect(profileReducer(
            profile as ProfileSchema,
            profileActions.setReadonly(true),
        ))
            .toEqual({ readonly: true });
    });
    test('with cancel edit', () => {
        const profile: DeepPartial<ProfileSchema> = {
            validate: [ValidateErrors.INCORRECT_AGE],
            readonly: false,
            profile: initialState,
            form: { ...initialState, firstname: '123', lastname: 'Ульби22' },
        };
        expect(profileReducer(
            profile as ProfileSchema,
            profileActions.cancelForm(),
        ))
            .toEqual({
                readonly: true, validate: undefined, form: profile.profile, profile: profile.profile,
            });
    });
    test('with update data', () => {
        const stateObj: DeepPartial<ProfileSchema> = { form: initialState };
        expect(profileReducer(
            stateObj as ProfileSchema,
            profileActions.updateData({ firstname: '12312' }),
        ))
            .toEqual({ form: { ...initialState, firstname: '12312' } });
    });
    test('with pending fetchProfileData', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            error: 'error',
        };
        expect(profileReducer(
            state as ProfileSchema,
            fetchProfileData.pending,
        ))
            .toEqual({
                isLoading: true,
                error: undefined,
            });
    });
    test('with fulfilled fetchProfileData', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            form: initialState,
            profile: initialState,
        };
        expect(profileReducer(
            state as ProfileSchema,
            fetchProfileData.fulfilled(state as IProfile, ''),
        ))
            .toEqual({
                isLoading: false,
                profile: state,
                form: state,
            });
    });
});
