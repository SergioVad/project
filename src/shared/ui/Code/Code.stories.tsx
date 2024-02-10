import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
import { ThemeDecorator } from '@/shared/config/decorators/ThemeDecorator';
import { Theme } from '@/shared/contexts/theme/ThemeContext';

const meta = {
    title: 'shared/Code',
    component: Code,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CodePrimary: Story = {
    args: {
        text: 'const meta = {\n'
        + ' title: \'layers/Code\',\n'
        + ' component: Code,\n'
        + 'parameters: {\n'
        + '},\n'
        + ' tags: [\'autodocs\'],\n'
        + 'argTypes: {\n'
        + ' },\n'
        + '} satisfies Meta<typeof Code>;\n'
        + 'export default meta;\n'
        + 'type Story = StoryObj<typeof meta>;\n',
    },
};

export const CodePrimaryDark: Story = {
    args: {
        text: 'const meta = {\n'
        + ' title: \'layers/Code\',\n'
        + ' component: Code,\n'
        + 'parameters: {\n'
        + '},\n'
        + ' tags: [\'autodocs\'],\n'
        + 'argTypes: {\n'
        + ' },\n'
        + '} satisfies Meta<typeof Code>;\n'
        + 'export default meta;\n'
        + 'type Story = StoryObj<typeof meta>;\n',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
