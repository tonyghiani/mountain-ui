
import React from "react";

export const TEXT_BASE_CLASS = 'leading-relaxed'
export const TEXT_VARIANTS = {
  primary: 'text-body',
  secondary: 'text-secondaryBody',
  caption: 'text-caption'
} as const;

export type TextVariant = keyof typeof TEXT_VARIANTS
export interface TextProps extends React.ComponentProps<'span'> {
  as?: React.ElementType
  /**
   * Variant options for styling a Text component.
   */
  variant?: TextVariant
};

export const Text = ({ as: Tag = 'span', className, variant = 'primary', ...props }: TextProps) => {
  const classes = [
    TEXT_BASE_CLASS,
    TEXT_VARIANTS[variant],
    className
  ].filter(Boolean).join(' ')

  return <Tag className={classes} {...props} />
}

Text.displayName = 'Text';
