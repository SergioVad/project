import type { Meta, StoryObj } from '@storybook/react';
import {ArticleTypeTabs.stories} from './ArticleTypeTabs.stories';

const meta = {
title: 'layers/ArticleTypeTabs.stories',
component: ArticleTypeTabs.stories,
parameters: {
},
tags: ['autodocs'],Ц
argTypes: {
},
} satisfies Meta<typeof ArticleTypeTabs.stories>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
args: {

}
};