import {
    ReactNode, createContext, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

type SpringType = typeof import('@react-spring/web')
type GestureType = typeof import('@use-gesture/react')

interface AnimationProviderProps {
    Spring?: SpringType;
    Gesture?: GestureType;
    isLoading?: boolean;
}

const AnimationContext = createContext<AnimationProviderProps>({});

const getAsyncAnimationLib = async () => {
    return Promise.all(
        [
            import('@react-spring/web'),
            import('@use-gesture/react'),
        ],
    );
};

export const useAnimationLibs = () => {
    return useContext(AnimationContext) as Required<AnimationProviderProps>;
};

export const AnimationProvider = ({ children }: {children: ReactNode}) => {
    const springRef = useRef<SpringType>();
    const gestureRef = useRef<GestureType>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        getAsyncAnimationLib().then(([spring, gesture]) => {
            springRef.current = spring;
            gestureRef.current = gesture;
            setIsLoading(true);
        });
    }, []);
    const animationValue = useMemo<AnimationProviderProps>(() => ({
        Spring: springRef.current,
        Gesture: gestureRef.current,
        isLoading,
    }), [isLoading]);
    return (
        <AnimationContext.Provider value={animationValue}>
            {children}
        </AnimationContext.Provider>
    );
};
