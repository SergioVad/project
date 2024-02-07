import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { buildOptions } from '../types/config';

interface buildBabelLoaderProps extends buildOptions {
    isTsx: boolean;
}

export function buildBabelLoader(options : buildBabelLoaderProps) {
    const { isTsx, isDev } = options;
    return (
        {
            test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins:
                    [
                        [
                            'i18next-extract',
                            {
                                locales: ['ru', 'en'],
                                keyAsDefaultValue: false,
                                saveMissing: true,
                            },
                        ],
                        [
                            '@babel/plugin-transform-typescript',
                            {
                                isTsx,
                            },
                        ],
                        '@babel/plugin-transform-runtime',
                        isTsx && !isDev && [
                            babelRemovePropsPlugin,
                            {
                                props: ['data-testid'],
                            },
                        ],
                        isDev && require.resolve('react-refresh/babel'),
                    ]
                        .filter(Boolean),
                },
            },
        });
}