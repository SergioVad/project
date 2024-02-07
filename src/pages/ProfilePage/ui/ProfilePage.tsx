import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { Text } from 'shared/ui/Text/Text';

export interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();
    if (!id) {
        <Text title="Профиль не найдена" />;
    }
    return (
        <Page className={classNames('', {}, [className])}>
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default memo(ProfilePage);
