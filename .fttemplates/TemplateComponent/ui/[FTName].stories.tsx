import type { Meta, StoryObj } from '@storybook/react';
import {[FTName]} from './[FTName]';

const meta = {
title: 'layers/[FTName]',
component: [FTName],
parameters: {
},
tags: ['autodocs'],
argTypes: {
},
} satisfies Meta<typeof [FTName]>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TestComponent: Story = {
args: {

}
};