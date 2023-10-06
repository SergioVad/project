import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
// use - подключение плагинов

// Backend для асинхронной подгрузки чанков
    .use(Backend)
// detect user language
    .use(LanguageDetector)
// pass the i18n instance to react-i18next.
    .use(initReactI18next)
// init i18next
    .init({
        lng: 'ru',
        fallbackLng: 'ru',
        debug: __IS_DEV__,
    });

export default i18n;
