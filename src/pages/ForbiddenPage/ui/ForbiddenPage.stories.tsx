import type { Meta, StoryObj } from '@storybook/react';
import { ForbiddenPage } from './ForbiddenPage';

const meta = {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ForbiddenPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
