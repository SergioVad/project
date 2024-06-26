/* eslint-disable no-param-reassign */
import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { cssLoader } from '../build/loaders/cssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        buildLocales: '',
        locales: '',
    };
    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');
    config.module!.rules!.push(cssLoader(true));
    config.resolve!.alias = {
        ...config.resolve!.alias,
        '@': paths.src,
    };
    type typeRuleSetRule = false | '' | 0 | RuleSetRule | '...' | null | undefined;

        config.module!.rules = config.module!.rules!.map((rule: typeRuleSetRule) => {
            if (rule
                && rule !== '...'
                && rule.test instanceof RegExp && rule.test.toString().includes('svg')) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });
        config.module!.rules!.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        config.plugins!.push(new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://jso2nplaceholder.com'),
            __PROJECT__: JSON.stringify('storybook'),
        }));
        return config;
};
