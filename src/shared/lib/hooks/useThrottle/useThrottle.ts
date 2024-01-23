import {
    MutableRefObject, useCallback, useEffect, useRef,
} from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttleRef = useRef(false);
    const timeOut = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    useEffect(() => {
        return () => {
            clearTimeout(timeOut.current);
        };
    }, []);
    return useCallback((...args: any[]) => {
        if (!throttleRef.current) {
            callback(...args);
            throttleRef.current = true;
            timeOut.current = setTimeout(() => {
                throttleRef.current = false;
            }, delay);
        }
    }, [callback, delay]);
}
