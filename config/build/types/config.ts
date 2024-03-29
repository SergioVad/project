import webpack from 'webpack';

export type BuildMode = webpack.Configuration['mode']

export type BuildPort = number | string;

export type BuildAanalyze = string;

export interface BuildEnv {
    port: BuildPort,
    mode: BuildMode,
    analyze: BuildAanalyze,
    apiUrl: string,
}

export interface BuildPaths {
    entry: string,
    build: string,
    html: string,
    src: string,
    locales: string,
    buildLocales: string,
}

export interface buildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean,
    port: BuildPort,
    analyze: BuildAanalyze,
    apiUrl: string,
    project: 'frontend',
}
