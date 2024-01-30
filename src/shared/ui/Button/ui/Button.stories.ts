import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/index.scss';

import { Button } from './Button';

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

export const English: Story = {
    args: { children: 'Button', color: 'normal' },
};

export const Russian: Story = {
    args: { children: 'Кнопка', color: 'normal' },
};
