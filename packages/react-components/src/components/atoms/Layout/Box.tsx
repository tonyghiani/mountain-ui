import styled from 'styled-components';

import { BaseElement, BaseElementProps } from '../../BaseElement';

export type BoxProps = BaseElementProps

/**
 * Box used to define Layout components
 */
const Box = styled(BaseElement) <BoxProps>`
  box-sizing: border-box;
  width: 100%;
`
Box.displayName = 'Box';

export default Box