import webpack from 'webpack';

export type BuildMode = webpack.Configuration['mode']

export type BuildPort = number | string;

export interface BuildEnv {
    port: BuildPort,
    mode: BuildMode,
}

export interface BuildPaths {
    entry: string,
    build: string,
    html: string,
    src: string
}

export interface buildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean,
    port: BuildPort,
}
