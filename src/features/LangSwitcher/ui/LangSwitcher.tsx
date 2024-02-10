import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { className, short } = props;
    const { i18n, t } = useTranslation();
    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            onClick={toggleLang}
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
        >
            {!short ? t('Язык') : t('ru')}
        </Button>
    );
});
