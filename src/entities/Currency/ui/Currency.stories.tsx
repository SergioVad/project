import type { Meta, StoryObj } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';

const meta = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        (Story) => <div style={{ padding: 200 }}><Story /></div>,
    ],
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
