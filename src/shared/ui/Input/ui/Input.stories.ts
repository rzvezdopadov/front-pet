import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/index.scss';

import { Input } from './Input';
import { THEMES } from '../../../const/themes';

const meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} as Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
    args: { placeholder: 'Type text', value: '123123' },
};

export const DarkTheme: Story = {
    args: { placeholder: 'Type text', value: '123123', className: THEMES.DARK },
};
