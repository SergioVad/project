import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/contexts/theme/useTheme';
import { Theme } from '@/shared/contexts/theme/ThemeContext';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import LightIcon from '../assets/theme-light 1.svg';
import DarkIcon from '../assets/theme-dark 1.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.DARK
                ? <LightIcon />
                : <DarkIcon />}
        </Button>
    );
});
