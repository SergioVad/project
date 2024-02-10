import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { Page } from '@/widgets/Page/Page';

export interface MainPageProps {
    className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
    const { t } = useTranslation('main');
    return (
        '123'
    );
};

export default memo(MainPage);
