
import { mnt } from '../../../../internals/mnt';
import BaseTypography, { BaseTypographyProps } from '../BaseTypography';

export const TEXT_BASE_CLASS = 'leading-relaxed'
export const TEXT_VARIANTS = {
  primary: 'text-body text-[--c-text-primary]',
  secondary: 'text-secondaryBody text-[--c-text-secondary]',
  caption: 'text-caption text-[--c-text-caption]'
} as const;

export type TextVariant = keyof typeof TEXT_VARIANTS

export interface TextProps extends BaseTypographyProps {
  /**
   * Variant options for styling a Text component.
   */
  variant?: TextVariant
};

/**
 * Text component for rendering plain text content within a UI. 
 * Offers flexibility in styling and formatting textual information to enhance the user interface's visual appeal and clarity.
 */
export const Text = mnt<TextProps>(BaseTypography)`
  ${TEXT_BASE_CLASS}
  ${({ variant = 'primary' }) => TEXT_VARIANTS[variant]}
`

Text.displayName = 'Text';