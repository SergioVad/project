import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';
import { getCompareByIdUsers } from '../../model/selectors/getCompareByIdUsers/getCompareByIdUsers';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slices/Profile.slice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = memo(
    (props: ProfilePageHeaderProps) => {
        const { className } = props;
        const readonly = useSelector(getProfileReadonly);
        const { t } = useTranslation();
        const dispatch = useAppDispatch();
        const onEdit = useCallback(() => {
            dispatch(profileActions.setReadonly(false));
        }, [dispatch]);
        const onCancelEdit = useCallback(() => {
            dispatch(profileActions.cancelForm());
        }, [dispatch]);
        const onSavelEdit = useCallback(() => {
            dispatch(updateProfileData());
        }, [dispatch]);
        const compareByIdUsers = useSelector(getCompareByIdUsers);
        if (compareByIdUsers) {
            return (
                <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
                    <Text title={t('Профиль')} />
                    { readonly ? (
                        <Button
                            className={cls.editBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <div className={cls.wrapperBtn}>
                            <Button
                                className={cls.editBtn}
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onCancelEdit}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                className={cls.editBtn}
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSavelEdit}
                            >
                                {t('Сохранить')}
                            </Button>
                        </div>
                    )}
                </div>
            );
        }
        return null;
    },
);
