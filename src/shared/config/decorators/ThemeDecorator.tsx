import { StoryFn } from '@storybook/react';
import { Theme } from 'shared/contexts/theme/ThemeContext';

export const ThemeDecorator = (theme: Theme) => (
    (Story: StoryFn) => (
        <div className={`app ${theme}`}>
            <Story />
        </div>
    ));
