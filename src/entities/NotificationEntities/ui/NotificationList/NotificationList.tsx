import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
// import cls from './NotificationList.module.scss';

import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useNotifications } from '../../api/notificationApi';

interface NotificationListProps {
    className?: string;
    userId?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className, userId } = props;
    const { data, isLoading } = useNotifications(userId);
    if (isLoading) {
        return (
            <VStack gap="16" className={classNames('', {}, [className])}>
                <Skeleton width="100%" height="80px" border="8px" />
                <Skeleton width="100%" height="80px" border="8px" />
                <Skeleton width="100%" height="80px" border="8px" />
            </VStack>
        );
    }
    return (
        <VStack gap="16" className={classNames('', {}, [className])}>
            {data?.map(((item) => (
                <NotificationItem key={item.id} item={item} />
            )))}
        </VStack>
    );
});
