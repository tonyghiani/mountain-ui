/* eslint-disable no-unused-vars */
import React from 'react';

export const ICON_COLORS = {
  light: 'text-light',
  dark: 'text-dark',
  current: 'text-current',
  primary: 'text-sky-600',
  accent: 'text-purple-600',
  success: 'text-green-500',
  warning: 'text-yellow-500',
  danger: 'text-red-600',
  disabled: 'text-gray-600'
} as const;
export const ICON_SIZES = {
  xs: 'text-sm',
  s: 'text-lg',
  m: 'text-2xl',
  l: 'text-4xl',
  xl: 'text-6xl	'
} as const;
export const ICON_VARIANTS = {
  button: 'bg-transparent border-0 cursor-pointer',
  icon: '',
  link: ''
} as const;

export type MntIconColor = keyof typeof ICON_COLORS;
export type MntIconSize = keyof typeof ICON_SIZES;
export type MntIconVariant = keyof typeof ICON_VARIANTS;

type IconElementProps =
  | (React.HTMLAttributes<HTMLSpanElement> & { variant?: 'icon' })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: 'link' })
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'button' });

export type IconBaseProps = {
  /**
   * Tag version of the icon
   */
  color?: MntIconColor;
  /**
   * Icon size
   */
  size?: MntIconSize;
  /**
   * Transition on style changes
   */
  withTransition?: boolean;
};

export type MntIconProps = IconElementProps & IconBaseProps;

export const MntIcon = ({
  children,
  className,
  color = 'current',
  size = 'm',
  withTransition = false,
  ...props
}: MntIconProps) => {
  const classes = [
    ICON_COLORS[color],
    ICON_SIZES[size],
    ICON_VARIANTS[props.variant],
    withTransition && '[&>svg]:transition-all [&>svg]:ease [&>svg]:duration-300',
    className
  ]
    .filter(Boolean)
    .join(' ');

  if (props.variant === 'button') {
    const { variant: _, ...rest } = props;
    return (
      <button className={classes} {...rest}>
        {React.Children.only(children)}
      </button>
    );
  }

  if (props.variant === 'link') {
    const { variant: _, ...rest } = props;
    return (
      <a className={classes} {...rest}>
        {React.Children.only(children)}
      </a>
    );
  }

  const { variant: _, ...rest } = props;
  return (
    <span className={classes} {...rest}>
      {React.Children.only(children)}
    </span>
  );
};
