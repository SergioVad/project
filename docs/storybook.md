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
