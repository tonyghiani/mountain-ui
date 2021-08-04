import styled from 'styled-components';
import { variant } from 'styled-system';

import BaseTypography, { BaseTypographyProps } from '../BaseTypography';

export type TextProps = BaseTypographyProps & {
  /* Text variant */
  variant?: 'primary' | 'secondary' | 'caption';
};

const Text = styled(BaseTypography)<TextProps>(
  variant({
    scale: 'variants.typography.text',
    variants: {
      primary: {
        color: 'text.primary',
        fontSize: 'body'
      },
      secondary: {
        color: 'text.secondary',
        fontSize: 'secondaryBody'
      },
      caption: {
        color: 'text.caption',
        fontSize: 'caption'
      }
    }
  })
);

Text.defaultProps = {
  as: 'span',
  variant: 'primary'
};

Text.displayName = 'Text';

export default Text;
