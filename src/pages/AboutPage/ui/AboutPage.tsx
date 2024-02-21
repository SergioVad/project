import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export interface AboutPageProps {
    className?: string;
}

const AboutPage = ({ className }: AboutPageProps) => {
    const { t } = useTranslation('about');
    return (
        <Page>
            {t('О странице', { ns: 'about' })}
        </Page>
    );
};

export default memo(AboutPage);
