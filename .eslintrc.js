/* eslint-disable linebreak-style */
module.exports = {
    env: {
        'jest/globals': true,
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
        {
            files: ['src/**/*.slice.ts'],
            rules: { 'no-param-reassign': ['error', { props: false }] },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'i18n',
        'jest',
        'react-hooks',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'react/jsx-no-comment-textnodes': 'off',
        'i18next/no-literal-string': ['error'],
        'max-len': ['error', { ignoreComments: true, code: 110 }],
        'linebreak-style': 'off',
        'react/display-name': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-undef': 'off',
        'i18n-ally-key-missing': 'off',
        'react/no-array-index-key': 'off',
        'arrow-body-style': 'off',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
};
