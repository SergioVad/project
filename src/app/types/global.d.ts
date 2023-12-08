declare module '*.scss';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.gif';
declare module '*.jpeg';

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'frontend' | 'storybook' | 'jest';

declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
