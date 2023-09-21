
import { mnt } from '../../../../internals/create_mnt_component';
import BaseTypography, { BaseTypographyProps } from '../BaseTypography';

const baseClass = 'leading-relaxed'
export const TEXT_VARIANTS = {
  primary: 'text-body text-[--c-text-primary]',
  secondary: 'text-secondaryBody text-[--c-text-secondary]',
  caption: 'text-caption text-[--c-text-caption]'
}

export type TextVariant = keyof typeof TEXT_VARIANTS

export interface TextProps extends BaseTypographyProps {
  variant?: TextVariant
};

const Text = mnt<TextProps>(BaseTypography)`
  ${baseClass}
  ${({ variant = 'primary' }) => TEXT_VARIANTS[variant]}
`

Text.displayName = 'Text';

export default Text;