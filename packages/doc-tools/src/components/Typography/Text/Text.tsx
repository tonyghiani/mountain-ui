import styled from 'styled-components';
import { variant } from 'styled-system';

import BaseTypography, { BaseTypographyProps } from '../BaseTypography';

export type TextProps = BaseTypographyProps & {
  /* Text variant */
  variant?: 'primary' | 'secondary' | 'caption';
};

const Text = styled(BaseTypography)<TextProps>`
  ${variant({
    scale: 'variants.typography.text',
    variants: {
      primary: {
        color: `var(--c-text-primary, hsl(210, 13.5%, 14%))`,
        fontSize: 'body'
      },
      secondary: {
        color: `var(--c-text-secondary, hsl(210, 10.5%, 32%))`,
        fontSize: 'secondaryBody'
      },
      caption: {
        color: `var(--c-text-caption, hsl(210, 9%, 41%))`,
        fontSize: 'caption'
      }
    }
  })}
`;

Text.defaultProps = {
  fontFamily: 'Avenir, Lato, Nunito Sans, apple-system, Helvetica, sans-serif',
  color: 'hsl(210, 14%, 9%)',
  lineHeight: 1.5,
  as: 'span'
};

Text.displayName = 'Text';

export default Text;
