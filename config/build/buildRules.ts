import webpack from 'webpack';
import { buildOptions } from './types/config';
import { cssLoader } from './loaders/cssLoader';

export const buildLoaders = ({ isDev }: buildOptions): webpack.RuleSetRule[] => {
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: false,
                            saveMissing: true,
                        },
                    ],
                ],
            },
        },
    };

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

    const scssLoader = cssLoader(isDev);
    return [
        scssLoader,
        IMGLoader,
        svgLoader,
        babelLoader,
        tsLoader,
    ];
};
