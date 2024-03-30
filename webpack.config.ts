import path from 'path';
import webpack from 'webpack';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve('src', 'index.tsx'),
        build: path.resolve('build'),
        html: path.resolve('public', 'index.html'),
        src: path.resolve('src'),
        locales: path.resolve('public', 'locales'),
        buildLocales: path.resolve('build', 'locales'),
    };

    const mode: BuildMode = env.mode || 'development';

    const analyze = env.analyze || '';

    const isDev = mode === 'development';

    const port = env.port || 3000;

    const apiUrl = env.apiUrl || 'https://37.228.117.229:8000';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
        analyze,
        apiUrl,
        project: 'frontend',
    });
    return config;
};
