## Запуск проекта

```
npm install - установка зависимостей
npm run start:dev - запуск сервера + frontend проекта в dev режиме
```

----

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда
- `npm run prepare` - Прекоммит хуки
- `npm run postinstall` - Скрипт для удаления кеша babel

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

## Тесты

В проекте используются 3 вида тестов:
1) Обычные unit тесты на jest - `npm run test:unit`
2) Тесты на компоненты с React testing library -`npm run test:unit`
3) Скриншотное тестирование с loki `npm run test:ui`

Подробнее о тестах - [документация тестирование](/docs/tests.md)

----

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin *eslint-plugin-sergio-plugin*,
который содержит 3 правила
1) path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2) available-layers - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entitites)
3) public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

----
## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';

const meta = {
    title: 'Shared/Button',
    component: Button,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonPrimary: Story = {
    args: {
        children: 'CLICK',
    },
};

export const ButtonClear: Story = {
    args: {
        children: 'CLICK',
        theme: ButtonTheme.CLEAR,
    },
};

export const ButtonOutlineRed: Story = {
    args: {
        children: 'CLICK',
        theme: ButtonTheme.OUTLINE_RED,
    },
};

export const ButtonBackgroundInverted: Story = {
    args: {
        children: 'CLICK',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const ButtonSquareSizeM: Story = {
    args: {
        children: '>',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.M,
    },
};

```


----

## Конфигурация проекта

Для разработки проект используется конфиг: Webpack - ./config/build

Вся конфигурация хранится в /config
- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

----

## pre commit хуки

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[dynamicReducerLoader](/src/shared/lib/dynamicReducerLoader/dynamicReducerLoader.tsx)

----


## Сущности (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/NotificationEntities)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Фичи (features)

- [ArticleComments](/src/features/ArticleComments)
- [ArticleRecommendationList](/src/features/ArticleRecommendationList)
- [ArticleSortSelect](/src/features/ArticleSortSelect)
- [ArticlesRating](/src/features/ArticlesRating)
- [ArticleTypeTabs](/src/features/ArticleTypeTabs)
- [ArticleViewSelector](/src/features/ArticleViewSelector)
- [AuthByUsername](/src/features/AuthByUsername)
- [DropdownAvatar](/src/features/DropdownAvatar)
- [EditableProfileCard](/src/features/EditableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [PopoverNotifications](/src/features/PopoverNotifications)
- [ScrollSave](/src/features/scrollSave)
- [ThemeSwitcher](/src/features/ThemeSwitcher)

## Виджеты (widgets)

- [Navbar](/src/widgets/Navbar)
- [Page](/src/widgets/Page)
- [PageError](/src/widgets/PageError)
- [PageLoader](/src/widgets/PageLoader)
- [Sidebar](/src/widgets/Sidebar)

## Страницы (pages)

- [AboutPage](/src/pages/AboutPage)
- [AdminPanelPage](/src/pages/AdminPanelPage)
- [ArticleDetailsPage](/src/pages/ArticleDetailsPage)
- [ArticleEditPage](/src/pages/ArticleEditPage)
- [ArticlesPage](/src/pages/ArticlesPage)
- [ForbiddenPage](/src/pages/ForbiddenPage)
- [MainPage](/src/pages/MainPage)
- [NotFoundPage](/src/pages/NotFoundPage)
- [ProfilePage](/src/pages/ProfilePage)
