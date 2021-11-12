import styled, { css } from 'styled-components';
import {
  compose,
  system,
  textStyle,
  TextStyleProps,
  typography,
  TypographyProps
} from 'styled-system';

import { BaseElement, BaseElementProps } from '../../BaseElement';

const textStyles = compose(typography, textStyle);

export type BaseTypographyProps = BaseElementProps &
  TypographyProps &
  TextStyleProps & {
    /* Text should be uncopyable */
    uncopyable?: boolean;
    /* Text should be bold */
    strong?: boolean;
    /* Text should be wrapped in ellipsis */
    wrapped?: boolean;
    /* Text should be clamped to specified line count */
    lineClamp?: number;
    /* Text should be underlined */
    underline?: boolean;
    /* Text have gradient color */
    gradient?: string;
  };

const wrapped = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const lineClamp = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const strong = css`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

const underline = css`
  text-decoration: underline;
`;

const uncopyable = css`
  user-select: none;
`;

const gradientColor = css`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

/**
 * The `BaseTypography` component works as the first brick to compose more specific text components
 */
const BaseTypography = styled(BaseElement)<BaseTypographyProps>`
  ${textStyles}
  ${system({ userSelect: true })}
  ${p => p.gradient && `background: linear-gradient(${p.gradient}); ${gradientColor} `}
  ${p => p.lineClamp && `${lineClamp}-webkit-line-clamp: ${p.lineClamp};`}
  ${p => p.strong && strong}
  ${p => p.uncopyable && uncopyable}
  ${p => p.underline && underline}
  ${p => p.wrapped && wrapped}
`;
BaseTypography.displayName = 'BaseTypography';

export default BaseTypography;
