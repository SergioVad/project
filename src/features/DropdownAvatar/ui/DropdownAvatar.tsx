import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Dropdown } from '@/shared/ui/Popups';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getStateAuthData, getStateIsAdminRole, getStateIsManagerRole, userActions,
} from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { RoutePath } from '@/shared/const/route';

interface DropdownAvatarProps {
    className?: string;
}

export const DropdownAvatar = memo((props: DropdownAvatarProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const userAuthData = useSelector(getStateAuthData);
    const isAdmin = useSelector(getStateIsAdminRole);
    const isManager = useSelector(getStateIsManagerRole);
    const isAdminPanelAvailabel = isAdmin || isManager;
    const logout = useCallback(() => {
        dispatch(userActions.logout());
        localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }, [dispatch]);
    if (!userAuthData) {
        return (
            null
        );
    }
    return (
        <div className={classNames('', {}, [className])}>
            <Dropdown
                direction="bottom left"
                trigger={(
                    <Avatar
                        size={50}
                        src={userAuthData.avatar}
                    />
                )}
                items={[
                    ...(isAdminPanelAvailabel ? [{
                        content: 'Админ',
                        href: RoutePath.admin_panel,
                    }] : []),
                    {
                        content: 'Выйти',
                        onClick: logout,
                    },
                    {
                        content: 'Профиль',
                        href: `${RoutePath.profile}${userAuthData.id}`,
                    },
                ]}
            />
        </div>
    );
});
