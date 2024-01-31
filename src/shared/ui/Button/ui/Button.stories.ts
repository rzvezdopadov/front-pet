import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/index.scss';
import { Button } from './Button';
import { THEMES } from '../../../const/themes';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ThemeLight: Story = {
    args: { children: 'Button', color: 'normal' },
};

export const ThemeDark: Story = {
    args: { children: 'Кнопка', variant: 'outline', color: 'success', className: THEMES.DARK },
};
