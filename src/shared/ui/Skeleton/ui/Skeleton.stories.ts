import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/index.scss';

import { Skeleton } from './Skeleton';
import { THEMES } from '../../../const/themes';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} as Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: { width: 200, height: 100 },
};

export const Circle: Story = {
    args: { border: '50%', height: 100, width: 100 },
};

export const Normal_Dark: Story = {
    args: { width: 200, height: 100, className: THEMES.DARK },
};

export const Circle_Dark: Story = {
    args: { border: '50%', height: 100, width: 100, className: THEMES.DARK },
};
