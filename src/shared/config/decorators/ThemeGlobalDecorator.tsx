import { withThemeByClassName } from '@storybook/addon-themes';
import { Theme } from '@/app/providers/ThemeProvider/ThemeProvider';

export const ThemeDecorator = () => {
    return (
        withThemeByClassName({
            themes: {
                light: `app ${Theme.LIGHT}`,
                dark: `app ${Theme.DARK}`,
                orange: `app ${Theme.ORANGE}`,
            },
            defaultTheme: 'light',
        })
    );
};
