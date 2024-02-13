import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ECurrency } from '@/entities/Currency';
import { ECountry } from '@/entities/Country';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { ProfileCard } from '@/entities/Profile';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/dynamicReducerLoader/dynamicReducerLoader';
import { ValidateErrors } from '../../model/const/const';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors }
    from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { profileActions, profileReducer } from '../../model/slices/Profile.slice';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader';

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

export const reducersProfilePage: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo(({ className, id }: EditableProfileCardProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const dataProfile = useSelector(getProfileForm);
    const loading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const ValidateErrorsSelector = useSelector(getProfileValidateErrors);
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
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {ValidateErrorsSelector?.length && ValidateErrorsSelector.map((item) => (
                    <Text
                        key={item}
                        text={translationValidateErrors[item]}
                        theme={TextTheme.ERROR}
                        data-testid="EditableProfileCard.Error"
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
            </div>
        </DynamicReducerLoader>
    );
});
