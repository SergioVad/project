import type { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from './CountrySelect';

const meta = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        (Story) => <div style={{ padding: 200 }}><Story /></div>,
    ],
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
