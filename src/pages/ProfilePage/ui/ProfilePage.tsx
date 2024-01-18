import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    ProfileCard,
    ValidateErrors,
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    profileReducer,
} from 'entities/Profile';
import { memo, useCallback, useEffect } from 'react';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/dynamicReducerLoader/dynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ECurrency } from 'entities/Currency';
import { ECountry } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
// import cls from './ProfilePage.module.scss';

export const reducersProfilePage: ReducersList = {
    profile: profileReducer,
};

export interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const dataProfile = useSelector(getProfileForm);
    const loading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const ValidateErrorsSelector = useSelector(getProfileValidateErrors);
    const { id } = useParams<{id: string}>();
    const setFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateData({ firstname: value }));
    }, [dispatch]);
    const setLasttName = useCallback((value?: string) => {
        dispatch(profileActions.updateData({ lastname: value }));
    }, [dispatch]);
    const setAge = useCallback((value?: string) => {
        dispatch(profileActions.updateData({ age: Number(value) }));
    }, [dispatch]);
    const setCity = useCallback((value?: string) => {
        dispatch(profileActions.updateData({ city: value }));
    }, [dispatch]);
    const setUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateData({ username: value }));
    }, [dispatch]);
    const setCurrency = useCallback((currency?: ECurrency) => {
        dispatch(profileActions.updateData({ currency }));
    }, [dispatch]);
    const setCountry = useCallback((country?: ECountry) => {
        dispatch(profileActions.updateData({ country }));
    }, [dispatch]);
    const { t } = useTranslation();
    useEffect(() => {
        if (__PROJECT__ === 'frontend' && id) {
            dispatch(fetchProfileData(id));
        }
    }, [dispatch, id]);
    const translationValidateErrors = {
        [ValidateErrors.INCORRECT_USERNAME]: t('Некорректное имя или фамилия'),
        [ValidateErrors.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateErrors.INCORRECT_DATA]: t('Некорректные данные'),
        [ValidateErrors.SERVER_ERROR]: t('Ошибка сервера'),
    };
    return (
        <DynamicReducerLoader reducers={reducersProfilePage} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {ValidateErrorsSelector?.length && ValidateErrorsSelector.map((item) => (
                    <Text
                        key={item}
                        text={translationValidateErrors[item]}
                        theme={TextTheme.ERROR}
                    />
                ))}
                <ProfileCard
                    dataProfile={dataProfile}
                    error={error}
                    isLoading={loading}
                    readonly={readonly}
                    setFirstName={setFirstName}
                    setLasttName={setLasttName}
                    setAge={setAge}
                    setCity={setCity}
                    setUsername={setUsername}
                    setCurrency={setCurrency}
                    setCountry={setCountry}
                />
            </Page>
        </DynamicReducerLoader>
    );
};

export default memo(ProfilePage);
