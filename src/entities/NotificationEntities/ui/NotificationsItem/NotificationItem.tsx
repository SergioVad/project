import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Text } from '@/shared/ui/Text/Text';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    item?: Notification
    className?: string;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;
    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text title={item?.title} text={item?.description} />
        </Card>
    );
    if (item?.href) {
        return (
            <a
                className={cls.link}
                target="_blank"
                rel="noreferrer"
                href={item.href}
            >
                {content}
            </a>
        );
    }
    return (
        content
    );
});
