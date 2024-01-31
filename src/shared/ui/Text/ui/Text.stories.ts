import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/index.scss';

import { Text } from './Text';
import { THEMES } from '../../../const/themes';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} as Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

const title = 'Title for our project it`s will be good';
const text = 'This is discription of text';

export const OnlyTitle: Story = {
    args: { title },
};

export const OnlyText: Story = {
    args: { text },
};

export const Full: Story = {
    args: { title, text, className: THEMES.DARK },
};
