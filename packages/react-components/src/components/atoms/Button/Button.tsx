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
export const BUTTON_VARIANTS = {
  shade: 'mnt-btn-shade',
  solid: 'mnt-btn-solid',
  outline: 'mnt-btn-outline',
  gradient: 'mnt-btn-gradient',
  link: 'mnt-btn-link',
  text: 'mnt-btn-text'
} as const;

export type MntButtonColor = keyof typeof BUTTON_COLORS;
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

export type MntButtonProps = React.ComponentPropsWithRef<typeof BaseButton>;

MntButton.displayName = 'MntButton';
