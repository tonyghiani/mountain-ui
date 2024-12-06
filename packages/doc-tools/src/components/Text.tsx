import mnt from 'react-mnt';

export const TEXT_BASE_CLASS = 'leading-relaxed';
export const TEXT_VARIANTS = {
  primary: 'text-body',
  secondary: 'text-secondaryBody',
  caption: 'text-caption'
} as const;

export type TextVariant = keyof typeof TEXT_VARIANTS;
export interface TextProps {
  /**
   * Variant options for styling a Text component.
   */
  variant?: TextVariant;
}

export const Text = mnt('span')<TextProps>`
  ${TEXT_BASE_CLASS}
  ${({ variant = 'primary' }) => TEXT_VARIANTS[variant]}
`;
