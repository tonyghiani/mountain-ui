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
        color: 'black',
        fontSize: 'body'
      },
      secondary: {
        color: 'gray.800',
        fontSize: 'secondaryBody'
      },
      caption: {
        color: 'gray.600',
        fontSize: 'caption'
      }
    }
  })}
`;

Text.defaultProps = {
  color: 'black',
  lineHeight: 'tall',
  as: 'span'
};

Text.displayName = 'Text';

export default Text;
