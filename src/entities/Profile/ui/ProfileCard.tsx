import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { CurrencySelect, ECurrency } from '@/entities/Currency';
import { CountrySelect, ECountry } from '@/entities/Country';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import cls from './ProfileCard.module.scss';
import { IProfile } from '../model/types/ProfileSchema';

interface ProfileCardProps {
    className?: string;
    dataProfile?: IProfile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    setFirstName?: (value: string) => void;
    setLasttName?: (value: string) => void;
    setAge?: (value: string) => void;
    setCity?: (value: string) => void;
    setUsername?: (value: string) => void;
    setCurrency?: (value: ECurrency) => void;
    setCountry?: (value: ECountry) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const {
        className,
        dataProfile,
        error,
        isLoading,
        readonly,
        setFirstName,
        setLasttName,
        setAge,
        setCity,
        setUsername,
        setCurrency,
        setCountry,
    } = props;
    const { t } = useTranslation();
    const mods: Mods = {
        [cls.editing]: !readonly,
    };
    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }
    return (
        <VStack
            gap="16"
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            {dataProfile?.avatar
                && (
                    <div className={cls.wrapper}>
                        <Avatar
                            src={dataProfile.avatar}
                            alt={dataProfile.avatar}
                            size={300}
                        />
                    </div>
                )}
            <Input
                value={dataProfile?.firstname}
                label={t('Ваше имя')}
                className={cls.input}
                readOnly={readonly}
                onChange={setFirstName}
            />
            <Input
                value={dataProfile?.lastname}
                label={t('Ваша фамилия')}
                className={cls.input}
                readOnly={readonly}
                onChange={setLasttName}
            />
            <Input
                value={dataProfile?.age}
                label={t('Ваш возраст')}
                className={cls.input}
                readOnly={readonly}
                onChange={setAge}
                type="number"
            />
            <Input
                value={dataProfile?.city}
                label={t('Ваш город')}
                className={cls.input}
                readOnly={readonly}
                onChange={setCity}
            />
            <Input
                value={dataProfile?.username}
                label={t('Ваш логин')}
                className={cls.input}
                readOnly={readonly}
                onChange={setUsername}
            />
            <CurrencySelect
                value={dataProfile?.currency}
                onChange={setCurrency}
                readOnly={readonly}
            />
            <CountrySelect
                value={dataProfile?.country}
                onChange={setCountry}
                readOnly={readonly}
            />
        </VStack>
    );
});
