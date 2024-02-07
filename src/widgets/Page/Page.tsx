import {
    MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollSaveByPath, scrollSaveActions } from 'features/scrollSave';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const dispatch = useAppDispatch();
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getScrollSaveByPath(state, pathname));
    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });
    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });
    const onScroll = useThrottle((e: UIEvent<HTMLElement>) => {
        dispatch(scrollSaveActions.setScroll({ path: pathname, position: e.currentTarget.scrollTop }));
    }, 500);
    return (
        <main
            onScroll={onScroll}
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            {onScrollEnd && <div className={cls.trigger} ref={triggerRef} />}
        </main>
    );
};
