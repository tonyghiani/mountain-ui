import React from 'react';
import mnt from 'react-mnt';

export const BUTTON_BASE_CLASS = 'mnt-btn';
export const BUTTON_COLORS = {
  primary: 'mnt-btn-primary',
  accent: 'mnt-btn-accent',
  success: 'mnt-btn-success',
  warning: 'mnt-btn-warning',
  danger: 'mnt-btn-danger',
  disabled: 'mnt-btn-disabled'
} as const;
export const BUTTON_SIZES = {
  xs: 'text-caption py-1 px-2',
  s: 'text-secondaryBody py-1.5 px-3',
  m: 'text-body py-2 px-4',
  l: 'text-lg py-2.5 px-5',
  xl: 'text-xl py-3 px-6'
} as const;
export const BUTTON_VARIANTS = {
  shade: 'mnt-btn-shade',
  solid: 'mnt-btn-solid',
  outline: 'mnt-btn-outline',
  gradient: 'mnt-btn-gradient',
  link: 'mnt-btn-link',
  text: 'mnt-btn-text'
} as const;

export type MntButtonColor = keyof typeof BUTTON_COLORS;
export type MntButtonSize = keyof typeof BUTTON_SIZES;
export type MntButtonVariant = keyof typeof BUTTON_VARIANTS;

interface ButtonProps {
  /**
   * The color to apply for the button content
   */
  color?: MntButtonColor;
  /**
   * The button status
   */
  disabled?: boolean;
  /**
   * An icon to show on the left of the content
   */
  leftIcon?: React.ReactNode;
  /**
   * An icon to show on the left of the content
   */
  rightIcon?: React.ReactNode;
  /**
   * Makes the button rounded
   */
  rounded?: boolean;
  /**
   * Makes the button rounded
   */
  size?: MntButtonSize;
  /**
   * The variant to use for the button
   */
  variant?: MntButtonVariant;
}

/**
 * Button component for triggering actions or events in the UI.
 * Provides interactivity with styled visuals, enhancing user engagement and navigation within the application.
 */
export const BaseButton = mnt('button')<ButtonProps>`
  ${BUTTON_BASE_CLASS}
  ${({ color = 'primary' }) => BUTTON_COLORS[color]}
  ${({ rounded = false }) => rounded && '!rounded-full'}
  ${({ size = 'm' }) => BUTTON_SIZES[size]}
  ${({ variant = 'shade' }) => BUTTON_VARIANTS[variant]}
`;

export function MntButton({ children, leftIcon, rightIcon, ...props }: MntButtonProps) {
  return (
    <BaseButton {...props}>
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </BaseButton>
  );
}

export function MntIconButton({ icon, className, ...props }: MntIconButtonProps) {
  const iconButtonClasses = ['px-0 py-0 !p-2', className].filter(Boolean).join(' ');

  return (
    <BaseButton className={iconButtonClasses} {...props}>
      {icon}
    </BaseButton>
  );
}

export type MntButtonProps = React.ComponentPropsWithRef<typeof BaseButton>;
export type MntIconButtonProps = Omit<MntButtonProps, 'leftIcon' | 'rightIcon'> & {
  icon: React.ReactNode;
};

MntButton.displayName = 'MntButton';
