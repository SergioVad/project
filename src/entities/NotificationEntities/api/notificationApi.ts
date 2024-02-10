import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../model/types/notification';

const NotificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], string | undefined>({
            query: (id) => ({
                url: '/notifications',
                params: {
                    userId: id || undefined,
                },
            }),
        }),

    }),
});

export const useNotifications = NotificationApi.useGetNotificationsQuery;
