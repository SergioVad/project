import { useTranslation } from 'react-i18next';

interface AboutPageProps {
    className?: string;
}

const AboutPage = ({ className }: AboutPageProps) => {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('О странице', { ns: 'about' })}
        </div>
    );
};

export default AboutPage;
