import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import webpack from 'webpack';
import { BuildPaths } from '../build/types/config';

const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
};
const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        'storybook-css-modules',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config) => {
        if (config.resolve) {
            config.resolve?.modules?.push(paths.src);
            config.resolve?.extensions?.push('.ts', '.tsx');
        }
        return config;
    },
};
export default config;
