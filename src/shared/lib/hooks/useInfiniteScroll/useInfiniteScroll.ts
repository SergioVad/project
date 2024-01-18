import { MutableRefObject, useEffect } from 'react';

interface useInfiniteScrollProps {
    callback?: () => void;
    wrapperRef: MutableRefObject<HTMLElement>;
    triggerRef: MutableRefObject<HTMLDivElement>;
}

export const useInfiniteScroll = (props: useInfiniteScrollProps) => {
    const { callback, triggerRef, wrapperRef } = props;
    const triggerElement = triggerRef.current;
    const wrapperElement = wrapperRef.current;
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        if (callback && triggerElement && wrapperElement) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.observe(triggerElement);
        }
        return () => {
            if (observer && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement);
            }
        };
    }, [callback, wrapperElement, triggerElement]);
};
