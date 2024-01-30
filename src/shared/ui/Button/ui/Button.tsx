import { ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactNode } from 'react';
import { classNames, Mods } from '../../../lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';
export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string; // Optional property
    variant?: ButtonVariant; // Themes btn
    square?: boolean; // Flag for square btn
    size?: ButtonSize; // Size with theme
    disabled?: boolean; // Flag disable btn
    children?: ReactNode; // Content btn
    fullWidth?: boolean; //
    color?: ButtonColor; //
    addonLeft?: ReactNode; //
    addonRight?: ReactNode; //
}

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
        className,
        children,
        variant = 'filled',
        square,
        disabled,
        fullWidth,
        size = 'm',
        addonLeft,
        addonRight,
        color = 'normal',
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
        [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[variant], cls[size], cls[color]])}
            disabled={disabled}
            {...otherProps}
            ref={ref}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cls.addonRight}>{addonRight}</div>
        </button>
    );
});