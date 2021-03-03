import styled, { css } from 'styled-components';
import { compose, textStyle, TextStyleProps, typography, TypographyProps as TypoProps, variant } from 'styled-system'

import { BaseElement, BaseElementProps } from '../../../BaseElement';

type TextProps = TypoProps & TextStyleProps

const textStyles = compose(typography, textStyle)

export type TypographyProps = BaseElementProps & TextProps & {
  /**
   * Text should be wrapped in ellipsis
   */
  wrapped?: boolean;
  /**
   * Text should be clamped to specified line count
   */
  lineClamp?: number;
}

export type HeadingProps = TypographyProps & {
  /**
   * Heading variant
   */
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const wrapped = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const lineClamp = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
`;

/**
 * TODO: add component description headline
 */
const BaseTypography = styled(BaseElement) <TypographyProps>`
  ${textStyles}
  ${p => p.wrapped && wrapped}
  ${p => p.lineClamp && `${lineClamp}-webkit-line-clamp: ${p.lineClamp};`}
`
export default BaseTypography

export const Heading = styled(BaseTypography).attrs((p: HeadingProps) => ({ as: p.as || p.variant }))<HeadingProps>(
  variant({
    scale: 'variants.typography.heading',
    variants: {
      h1: {
        color: 'text.primary',
        fontSize: 'h1',
        lineHeight: 'short',
        fontWeight: 'bold'
      },
      h2: {
        color: 'text.primary',
        fontSize: 'h2',
        lineHeight: 'short',
        fontWeight: 'bold'
      },
      h3: {
        color: 'text.primary',
        fontSize: 'h3',
        lineHeight: 'short',
        fontWeight: 'bold'
      },
      h4: {
        color: 'text.primary',
        fontSize: 'h4',
        lineHeight: 'normal',
        fontWeight: 'bold'
      },
      h5: {
        color: 'text.primary',
        fontSize: 'h5',
        lineHeight: 'normal',
        fontWeight: 'bold'
      },
      h6: {
        color: 'text.primary',
        fontSize: 'h6',
        lineHeight: 'normal',
        fontWeight: 'bold'
      }
    }
  })
)

Heading.defaultProps = {
  variant: 'h1'
}

export const Text = styled(BaseTypography).attrs((p: HeadingProps) => ({ as: p.variant }))<HeadingProps>(
  variant({
    scale: 'variants.typography.heading',
    variants: {
      h1: {
        color: 'text.primary',
        fontSize: 'h1',
        lineHeight: 'short',
        fontWeight: 'bold'
      },
      h2: {
        color: 'text.primary',
        fontSize: 'h2',
        lineHeight: 'short',
        fontWeight: 'bold'
      },
      h3: {
        color: 'text.primary',
        fontSize: 'h3',
        lineHeight: 'short',
        fontWeight: 'bold'
      },
      h4: {
        color: 'text.primary',
        fontSize: 'h4',
        lineHeight: 'normal',
        fontWeight: 'bold'
      },
      h5: {
        color: 'text.primary',
        fontSize: 'h5',
        lineHeight: 'normal',
        fontWeight: 'bold'
      },
      h6: {
        color: 'text.primary',
        fontSize: 'h6',
        lineHeight: 'normal',
        fontWeight: 'bold'
      }
    }
  })
)

Heading.defaultProps = {
  variant: 'h1'
}

BaseTypography.displayName = 'BaseTypography';