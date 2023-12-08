import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'widgets/PageError';

export interface MainPageProps {
    className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('Главная')}
            <Counter />
            <BugButton />
        </div>
    );
};

export default MainPage;
