import { PolymorphicAs, createMntComponent } from '../../../../internals/create_mnt_component';
import BaseTypography, { BaseTypographyProps } from '../BaseTypography';

export interface HeadingProps extends BaseTypographyProps { }

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const baseClass = 'font-bold tracking-wide'
const variants: Record<HeadingVariant, string> = {
  h1: 'text-h1 leading-snug text-[--c-heading1]',
  h2: 'text-h2 leading-snug text-[--c-heading2]',
  h3: 'text-h3 leading-snug text-[--c-heading3]',
  h4: 'text-h4 leading-normal text-[--c-heading4]',
  h5: 'text-h5 leading-normal text-[--c-heading5]',
  h6: 'text-h6 leading-normal text-[--c-heading6]'
}

const Heading = createMntComponent<HeadingProps>(BaseTypography)((props) => ({
  as: props.variant as PolymorphicAs,
  baseClass,
  variants,
  defaultVariant: 'h1',
}))

Heading.displayName = 'Heading';

export default Heading;
