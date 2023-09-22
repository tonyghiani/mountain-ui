import { mnt } from '../../../../internals/mnt';
import BaseTypography, { BaseTypographyProps } from '../BaseTypography';

const baseClass = 'font-bold tracking-wide'
const HEADING_VARIANTS = {
  h1: 'text-h1 leading-snug text-[--c-heading1]',
  h2: 'text-h2 leading-snug text-[--c-heading2]',
  h3: 'text-h3 leading-snug text-[--c-heading3]',
  h4: 'text-h4 leading-normal text-[--c-heading4]',
  h5: 'text-h5 leading-normal text-[--c-heading5]',
  h6: 'text-h6 leading-normal text-[--c-heading6]'
}

export type HeadingVariant = keyof typeof HEADING_VARIANTS

export interface HeadingProps extends BaseTypographyProps {
  variant?: HeadingVariant
}

const Heading = mnt<HeadingProps>(BaseTypography).attrs(p => ({ as: p.as ?? p.variant }))`
  ${baseClass}
  ${({ variant = 'h1' }) => HEADING_VARIANTS[variant]}
`

Heading.displayName = 'Heading';

export default Heading;
