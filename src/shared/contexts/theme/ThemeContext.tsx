import {
    createContext, ReactNode, useMemo, useState,
} from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
    ORANGE = 'orange',
}

const defaultTheme = localStorage.getItem('theme') as Theme || Theme.LIGHT;

interface ThemeContenxtProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

interface ThemeProviderProps {
    children: ReactNode,
}

export const ThemeContext = createContext<ThemeContenxtProps>({});

export const ThemeProvider = (props: ThemeProviderProps) => {
    const { children } = props;
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
