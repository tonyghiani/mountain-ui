import styled from 'styled-components';
import { compose, textStyle, typography, variant } from 'styled-system'

import { BaseElement, BaseElementProps } from '../../../BaseElement';

const textStyles = compose(typography, textStyle)

export interface TypographyProps extends BaseElementProps {
  /**
   * Text should be wrapped in ellipsis
   */
  wrapped: boolean;
}

export interface HeadingProps extends TypographyProps {
  /**
   * Heading variant 
   */
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

/**
 * TODO: add component description headline
 */
export const BaseTypography = styled(BaseElement)(textStyles)

export const Heading = styled(BaseTypography)<HeadingProps>(
  variant({
    scale: 'variants.typography.heading',
    variants: {
      h1: {
        color: 'colors.text.primary',
        fontSize: 'fontSizes.h1',
        lineHeight: 'lineHeights.short',
        fontWeight: 'fontWeights.bold'
      },
      h2: {
        color: 'colors.text.primary',
        fontSize: 'fontSizes.h2',
        lineHeight: 'lineHeights.short',
        fontWeight: 'fontWeights.bold'
      },
      h3: {
        color: 'colors.text.primary',
        fontSize: 'fontSizes.h3',
        lineHeight: 'lineHeights.short',
        fontWeight: 'fontWeights.bold'
      },
      h4: {
        color: 'colors.text.primary',
        fontSize: 'fontSizes.h4',
        lineHeight: 'lineHeights.normal',
        fontWeight: 'fontWeights.bold'
      },
      h5: {
        color: 'colors.text.primary',
        fontSize: 'fontSizes.h5',
        lineHeight: 'lineHeights.normal',
        fontWeight: 'fontWeights.bold'
      },
      h6: {
        color: 'colors.text.primary',
        fontSize: 'fontSizes.h6',
        lineHeight: 'lineHeights.normal',
        fontWeight: 'fontWeights.bold'
      }
    }
  })
)

Heading.defaultProps = {
  variant: 'h1'
}

BaseTypography.displayName = 'BaseTypography';

export default BaseTypography;