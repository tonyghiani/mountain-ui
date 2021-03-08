import styled from 'styled-components';
import { grid } from 'styled-system';

import { BaseElement, BaseElementProps } from '../../../BaseElement';

export type LayoutProps = BaseElementProps

/**
 * Container component
 */
export const Container = styled(BaseElement) <LayoutProps>``
Container.defaultProps = {
  maxWidth: ['mobile', 'tablet', 'desktop'],
  px: 3,
  mx: 'auto',
}
Container.displayName = 'Container'

/**
 * Box component
 */
export const Box = BaseElement
Box.displayName = 'Box'

/**
 * Grid component
 */
export const Grid = styled(BaseElement)`
  ${grid}
  display: grid;
`;
Grid.displayName = 'Grid'

export default BaseElement