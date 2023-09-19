import styled from 'styled-components';
import { variant } from 'styled-system';

import { styleProps } from '../../../BaseElement';
import BaseTypography, { BaseTypographyProps } from '../BaseTypography';

export type HeadingProps = BaseTypographyProps & {
  /* Heading variant */
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Heading = styled(BaseTypography).attrs<HeadingProps>(p => ({
  as: p.as || p.variant
}))<HeadingProps>`
  letter-spacing: 0.5px;
  ${({ theme }) =>
    variant({
      scale: 'variants.typography.heading',
      variants: {
        h1: {
          fontSize: 'h1',
          lineHeight: 'short',
          fontWeight: 'bold',
          color: `var(--c-heading1, var(--c-heading, ${theme.colors.gray[900]}))`
        },
        h2: {
          fontSize: 'h2',
          lineHeight: 'short',
          fontWeight: 'bold',
          color: `var(--c-heading2, var(--c-heading, ${theme.colors.gray[900]}))`
        },
        h3: {
          fontSize: 'h3',
          lineHeight: 'short',
          fontWeight: 'bold',
          color: `var(--c-heading3, var(--c-heading, ${theme.colors.gray[900]}))`
        },
        h4: {
          fontSize: 'h4',
          lineHeight: 'normal',
          fontWeight: 'bold',
          color: `var(--c-heading4, var(--c-heading, ${theme.colors.gray[900]}))`
        },
        h5: {
          fontSize: 'h5',
          lineHeight: 'normal',
          fontWeight: 'bold',
          color: `var(--c-heading5, var(--c-heading, ${theme.colors.gray[900]}))`
        },
        h6: {
          fontSize: 'h6',
          lineHeight: 'normal',
          fontWeight: 'bold',
          color: `var(--c-heading6, var(--c-heading, ${theme.colors.gray[900]}))`
        }
      }
    })}
  ${styleProps}
`;

Heading.displayName = 'Heading';
Heading.defaultProps = {
  variant: 'h1'
};

export default Heading;
