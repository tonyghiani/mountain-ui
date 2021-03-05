import styled, { css } from 'styled-components';
import { compose, system, textStyle, TextStyleProps, typography, TypographyProps } from 'styled-system'

import { BaseElement, BaseElementProps } from '../../../BaseElement';

const textStyles = compose(typography, textStyle)

export type BaseTypographyProps = BaseElementProps & TypographyProps & TextStyleProps & {
  /* Text should be unselectable */
  unselectable?: boolean;
  /* Text should be bold */
  strong?: boolean;
  /* Text should be wrapped in ellipsis */
  wrapped?: boolean;
  /* Text should be clamped to specified line count */
  lineClamp?: number;
  /* Text should be underlined */
  underline?: boolean;
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
const BaseTypography = styled(BaseElement) <BaseTypographyProps>`
  ${textStyles}
  ${system({ userSelect: true })}
  ${p => p.wrapped && wrapped}
  ${p => p.strong && strong}
  ${p => p.lineClamp && `${lineClamp}-webkit-line-clamp: ${p.lineClamp};`}
  ${p => p.underline && underline}
  ${p => p.unselectable && unselectable}
  ${p => `
    ${p.wrapped && wrapped}
    ${p.strong && strong}
    ${p.lineClamp && `${lineClamp}-webkit-line-clamp: ${p.lineClamp}`}
    ${p.underline && underline}
    ${p.unselectable && unselectable}
  `}
`
BaseTypography.displayName = 'BaseTypography';

export default BaseTypography