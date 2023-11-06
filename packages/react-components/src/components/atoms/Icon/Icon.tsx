import React, { useEffect, useState } from 'react';
import mnt from 'react-mnt';

import { MntIconType, typesToIconMap } from './typesToIconMap';

export const ICON_COLORS = {
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
  button: {
    tag: 'button',
    classes: 'bg-transparent border-0 cursor-pointer'
  },
  icon: {
    tag: 'span',
    classes: ''
  },
  link: {
    tag: 'a',
    classes: ''
  }
} as const;

export type IconElement = HTMLButtonElement | HTMLSpanElement | HTMLAnchorElement;
export type MntIconColor = keyof typeof ICON_COLORS;
export type MntIconSize = keyof typeof ICON_SIZES;
export type MntIconVariant = keyof typeof ICON_VARIANTS;

type IconElementProps =
  | (React.ComponentProps<'span'> & { variant?: 'icon' })
  | (React.ComponentProps<'a'> & { variant?: 'link' })
  | (React.ComponentProps<'button'> & { variant?: 'button' });

export type MntIconProps = IconElementProps & {
  /**
   * Tag version of the icon
   */
  color?: MntIconColor;
  /**
   * Icon size
   */
  size?: MntIconSize;
  /**
   * Icon type
   */
  iconType: MntIconType;
  /**
   * Transition on style changes
   */
  withTransition?: boolean;
};

type BaseIconProps = Omit<MntIconProps, 'iconType'>;

/**
 * MntIcon component wrapper for svg icons
 */
export const BaseIcon = mnt('span').params<BaseIconProps>(props => ({
  as: ICON_VARIANTS[props.variant || 'icon']?.tag
}))`
  ${({ color = 'primary' }) => ICON_COLORS[color]}
  ${({ size = 'm' }) => ICON_SIZES[size]}
  ${({ variant = 'icon' }) => ICON_VARIANTS[variant]?.classes}
  ${({ withTransition = false }) =>
    withTransition && '[&>svg]:transition-all [&>svg]:ease [&>svg]:duration-300'}
`;

export const MntIcon = React.forwardRef<IconElement, MntIconProps>(function MntIcon(
  { className, color, size, iconType, variant, withTransition, ...props },
  ref
) {
  const [Icon, setIcon] = useState<React.FunctionComponent | undefined>();

  useEffect(() => {
    const iconFilename = typesToIconMap[iconType];
    if (iconFilename) {
      import(`./icons/${iconFilename}.tsx`).then(module => {
        setIcon(() => module.default);
      });
    }
  }, [iconType]);

  return (
    Icon && (
      <BaseIcon
        ref={ref}
        className={className}
        color={color}
        size={size}
        variant={variant}
        withTransition={withTransition}
      >
        <Icon {...props} />
      </BaseIcon>
    )
  );
});

MntIcon.displayName = 'MntIcon';
