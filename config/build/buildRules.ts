import webpack from 'webpack';
import { buildOptions } from './types/config';
import { cssLoader } from './loaders/cssLoader';
import { buildBabelLoader } from './loaders/babelLoader';

export const buildLoaders = ({ isDev }: buildOptions): webpack.RuleSetRule[] => {
    const scssLoader = cssLoader(isDev);
    const babelLoader = buildBabelLoader(isDev);

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const IMGLoader = {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        scssLoader,
        IMGLoader,
        svgLoader,
        babelLoader,
        tsLoader,
    ];
};
