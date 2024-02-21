import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { RoutePath } from '@/shared/const/route';

interface CommentProps {
    comment?: Comment;
    className?: string;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentProps) => {
    const { className, comment, isLoading } = props;
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton
                        width={40}
                        height={40}
                        border="50%"
                        className={cls.icon}
                    />
                    <Skeleton
                        width={120}
                        height={30}
                        border="5px"
                    />
                </div>
                <div className={cls.text}>
                    <Skeleton
                        width="100"
                        height={50}
                    />
                </div>
            </div>
        );
    }
    if (!comment) {
        return null;
    }
    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {comment.user.avatar
                    ? (
                        <Avatar
                            src={comment.user.avatar}
                            size={30}
                            className={cls.icon}
                        />
                    ) : null}
                <Text title={comment.user.username} />
            </AppLink>
            <div className={cls.text}>
                {comment.text}
            </div>
        </div>
    );
});
