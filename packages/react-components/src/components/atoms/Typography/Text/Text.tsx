
import { createMntComponent } from '../../../../internals/create_mnt_component';
import BaseTypography, { BaseTypographyProps } from '../BaseTypography';

export type TextVariant = 'primary' | 'secondary' | 'caption'

export interface TextProps extends BaseTypographyProps { };

const baseClass = 'leading-relaxed'
const variants: Record<TextVariant, string> = {
  primary: 'text-body text-[--c-text-primary]',
  secondary: 'text-secondaryBody text-[--c-text-secondary]',
  caption: 'text-caption text-[--c-text-caption]'
}

const Text = createMntComponent<TextProps>(BaseTypography)({
  baseClass,
  variants,
  defaultVariant: 'primary',
})

Text.displayName = 'Text';

export default Text;