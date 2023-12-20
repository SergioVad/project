import webpack from 'webpack';
import { buildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildRules';
import { buildResolves } from './buildResolves';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options: buildOptions): webpack.Configuration => {
    const {
        paths, mode, isDev,
    } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
};
