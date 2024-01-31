import React, { memo } from 'react';
import { classNames, Mods } from '../../../lib/classNames/classNames';
import cls from './Image.module.scss';

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    src?: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
    size?: number | string;
    rounded?: boolean;
    border?: boolean;
    onClick: () => void;
}

export const Image = memo((props: ImgProps) => {
    const {
        className,
        src = '',
        alt = '',
        width = 32,
        height = 32,
        size = '',
        rounded = false,
        border = false,
        onClick = () => {},
        ...otherProps
    } = props;

    let newWidth = width;
    let newHeight = height;

    if (size) {
        newWidth = size;
        newHeight = size;
    }

    const mods: Mods = {
        [cls.rounded]: rounded,
        [cls.border]: border,
    };

    return (
        <img
            src={src}
            alt={alt}
            className={classNames(cls.Image, mods, [className])}
            width={newWidth}
            height={newHeight}
            onClick={onClick}
            {...otherProps}
        />
    );
});
