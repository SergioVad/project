import type { Meta, StoryObj } from '@storybook/react';
import { VStack } from './VStack';

const meta = {
    title: 'shared/VStack',
    component: VStack,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof VStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: (
            <>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </>
        ),
        justify: 'center',
        gap: '32',
    },
};
