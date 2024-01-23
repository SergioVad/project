import {
    MutableRefObject, useCallback, useEffect, useRef,
} from 'react';

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
    const timer = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    useEffect(() => {
        return () => {
            clearInterval(timer.current);
        };
    }, []);
    return useCallback((...args: any[]) => {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
        return () => clearTimeout(timer.current);
    }, [callback, delay]);
}
