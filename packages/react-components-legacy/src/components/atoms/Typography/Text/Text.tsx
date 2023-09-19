import styled from 'styled-components';
import { variant } from 'styled-system';

import BaseTypography, { BaseTypographyProps } from '../BaseTypography';

export type TextProps = BaseTypographyProps & {
  /* Text variant */
  variant?: 'primary' | 'secondary' | 'caption';
};

const Text = styled(BaseTypography)<TextProps>`
  ${({ theme }) =>
    variant({
      scale: 'variants.typography.text',
      variants: {
        primary: {
          color: `var(--c-text-primary, ${theme.colors.gray[900]})`,
          fontSize: 'body'
        },
        secondary: {
          color: `var(--c-text-secondary, ${theme.colors.gray[700]})`,
          fontSize: 'secondaryBody'
        },
        caption: {
          color: `var(--c-text-caption, ${theme.colors.gray[600]})`,
          fontSize: 'caption'
        }
      }
    })}
`;

Text.defaultProps = {
  color: 'dark',
  lineHeight: 'tall',
  as: 'span'
};

Text.displayName = 'Text';

export default Text;
