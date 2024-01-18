import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { BugButton } from 'widgets/PageError';

export interface MainPageProps {
    className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
    const { t } = useTranslation('main');
    return (
        <Page>
            {t('Главная')}
            <Counter />
            <BugButton />
        </Page>
    );
};

export default memo(MainPage);
