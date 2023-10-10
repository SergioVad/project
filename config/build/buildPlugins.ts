import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { buildOptions } from './types/config';

export const buildPlugins = (options: buildOptions): webpack.WebpackPluginInstance[] => {
    const { paths, isDev, analyze } = options;
    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        // Позволяет использовать глобальные переменные
        new webpack.DefinePlugin({
            __IS_DEV__: isDev,
        }),
        // Позволяет делает изменения бандла без перезагрузки страницы
        new webpack.HotModuleReplacementPlugin(),
        // // Делает анализ размеров бандла
        analyze && new BundleAnalyzerPlugin({
            openAnalyzer: true,
        }),
    ];
};
