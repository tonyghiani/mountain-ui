
import { mnt } from '../../../../internals/mnt';
import { MntBaseTypography, MntBaseTypographyProps } from '../BaseTypography';

export const TEXT_BASE_CLASS = 'leading-relaxed'
export const TEXT_VARIANTS = {
  primary: 'text-body text-[--c-text-primary]',
  secondary: 'text-secondaryBody text-[--c-text-secondary]',
  caption: 'text-caption text-[--c-text-caption]'
} as const;

export type MntTextVariant = keyof typeof TEXT_VARIANTS

export interface MntTextProps extends MntBaseTypographyProps {
  /**
   * Variant options for styling a Text component.
   */
  variant?: MntTextVariant
};

/**
 * Text component for rendering plain text content within a UI. 
 * Offers flexibility in styling and formatting textual information to enhance the user interface's visual appeal and clarity.
 */
export const MntText = mnt<MntTextProps>(MntBaseTypography)`
  ${TEXT_BASE_CLASS}
  ${({ variant = 'primary' }) => TEXT_VARIANTS[variant]}
`

MntText.displayName = 'MntText';