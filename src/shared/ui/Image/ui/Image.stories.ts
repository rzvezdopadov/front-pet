import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/index.scss';
import CatImg from './cat.jpg';
import { Image } from './Image';
import { THEMES } from '../../../const/themes';

const meta = {
    title: 'shared/Image',
    component: Image,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} as Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
    args: { src: CatImg.src, size: 300 },
};

export const DarkTheme: Story = {
    args: { src: CatImg.src, size: 300, rounded: true, border: true, className: THEMES.DARK },
};

export const NotSrc: Story = {
    args: { alt: 'We don`t have an img', size: 300, rounded: true, border: true, className: THEMES.DARK },
};
