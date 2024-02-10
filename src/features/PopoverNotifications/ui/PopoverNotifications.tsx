import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Popover } from '@/shared/ui/Popups';
import { NotificationList } from '@/entities/NotificationEntities';
import { getStateAuthData } from '@/entities/User';
import { Icon } from '@/shared/ui/Icon/Icon';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import cls from './PopoverNotifications.module.scss';
import IconNotification from '../assets/image/notification.svg';

interface PopoverNotificationsProps {
    className?: string;
}

export const PopoverNotifications = memo((props: PopoverNotificationsProps) => {
    const { className } = props;
    const userAuthData = useSelector(getStateAuthData);
    const device = useDevice();
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);
    if (device) {
        return (
            <>
                <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
                    <Icon Img={IconNotification} inverted />
                </Button>
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </>
        );
    }
    return (
        <Popover
            className={classNames('', {}, [className])}
            trigger={
                <Icon Img={IconNotification} inverted />
            }
        >
            <NotificationList
                className={cls.notifications}
                userId={userAuthData?.id}
            />
        </Popover>
    );
});
