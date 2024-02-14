import {
    createContext, ReactNode, useMemo, useState,
} from 'react';

export enum Theme {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
    ORANGE = 'app_orange_theme',
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
