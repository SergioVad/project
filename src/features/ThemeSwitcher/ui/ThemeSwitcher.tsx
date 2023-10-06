import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/contexts/theme/useTheme';
import { Theme } from 'shared/contexts/theme/ThemeContext';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';
import LightIcon from '../assets/theme-light 1.svg';
import DarkIcon from '../assets/theme-dark 1.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.DARK
                ? <img alt="LightIcon" src={LightIcon} />
                : <img alt="DarkIcon" src={DarkIcon} />}
        </Button>
    );
};
