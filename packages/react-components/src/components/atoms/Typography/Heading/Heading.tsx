import mnt from 'react-mnt';

import { MntBaseTypography } from '../BaseTypography';

export const HEADING_BASE_CLASS = 'font-bold tracking-wide';
export const HEADING_VARIANTS = {
  h1: 'text-h1 leading-snug text-[--c-heading1]',
  h2: 'text-h2 leading-snug text-[--c-heading2]',
  h3: 'text-h3 leading-snug text-[--c-heading3]',
  h4: 'text-h4 leading-normal text-[--c-heading4]',
  h5: 'text-h5 leading-normal text-[--c-heading5]',
  h6: 'text-h6 leading-normal text-[--c-heading6]'
} as const;

export type MntHeadingVariant = keyof typeof HEADING_VARIANTS;

export interface HeadingProps {
  /**
   * Variant options for styling a Heading component.
   */
  variant?: MntHeadingVariant;
}

/**
 * Heading component for displaying text titles or headings in a styled and visually appealing manner,
 * enhancing content presentation within a UI.
 */
export const MntHeading = mnt(MntBaseTypography).params<HeadingProps>(p => ({
  as: p.as ?? p.variant
}))`
  ${HEADING_BASE_CLASS}
  ${({ variant = 'h1' }) => HEADING_VARIANTS[variant]}
`;

export type MntHeadingProps = Omit<React.ComponentPropsWithRef<typeof MntHeading>, 'ref'> & {
  ref?: React.Ref<HTMLHeadingElement>;
};
