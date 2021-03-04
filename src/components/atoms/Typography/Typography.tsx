import styled, { css } from 'styled-components';
import { compose, system, textStyle, TextStyleProps, typography, TypographyProps as TypoProps, variant } from 'styled-system'

import { BaseElement, BaseElementProps } from '../../../BaseElement';

type TextBasicProps = TypoProps & TextStyleProps

const textStyles = compose(typography, textStyle)

export type TypographyProps = BaseElementProps & TextBasicProps & {
  /**
   * Text should be unselectable
   */
  unselectable?: boolean;
  /**
   * Text should be bold
   */
  strong?: boolean;
  /**
   * Text should be wrapped in ellipsis
   */
  wrapped?: boolean;
  /**
   * Text should be clamped to specified line count
   */
  lineClamp?: number;
  /**
   * Text should be underlined
   */
  underline?: boolean;
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

const strong = css`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

const underline = css`
  text-decoration: underline;
`;

const unselectable = css`
  user-select: none;
`;

/**
 * TODO: add component description headline
 */
const BaseTypography = styled(BaseElement) <TypographyProps>`
  ${textStyles}
  ${system({ userSelect: true })}
  ${p => p.wrapped && wrapped}
  ${p => p.strong && strong}
  ${p => p.lineClamp && `${lineClamp}-webkit-line-clamp: ${p.lineClamp};`}
  ${p => p.underline && underline}
  ${p => p.unselectable && unselectable}
`
BaseTypography.displayName = 'BaseTypography';

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

Heading.displayName = 'Heading'
Heading.defaultProps = {
  variant: 'h1'
}

export type TextProps = TypographyProps & {
  /**
   * Heading variant
   */
  variant: 'primary' | 'secondary' | 'caption'
}

export const Text = styled(BaseTypography).attrs((p: TextProps) => ({ as: p.as || 'span' }))<TextProps>(
  variant({
    scale: 'variants.typography.heading',
    variants: {
      primary: {
        color: 'text.primary',
        fontSize: 'body',
        lineHeight: 'normal',
        fontWeight: 'normal'
      },
      secondary: {
        color: 'text.secondary',
        fontSize: 'secondaryBody',
        lineHeight: 'normal',
        fontWeight: 'normal'
      },
      caption: {
        color: 'text.caption',
        fontSize: 'caption',
        lineHeight: 'normal',
        fontWeight: 'normal'
      }
    }
  })
)

Text.displayName = 'Text'

export const Paragraph = styled(Text) <TextProps>``

Paragraph.defaultProps = { as: 'p' }
Paragraph.displayName = 'Paragraph'