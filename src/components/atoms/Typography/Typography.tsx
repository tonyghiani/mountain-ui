import styled from 'styled-components';
import { compose, textStyle, typography, variant } from 'styled-system'

import { BaseElement } from '../../../BaseElement';

const textStyles = compose(typography, textStyle)

export interface TypographyProps {
  /**
   * TODO: add prop description
   */
  wrapped: boolean;
}

/**
 * TODO: add component description headline
 */
export const BaseTypography = styled(BaseElement)(textStyles)

export const Heading = styled(BaseTypography).attrs(({ variant }) => ({ as: variant }))(
  variant({
    scale: 'typography'
  })
)

BaseTypography.displayName = 'BaseTypography';

export default BaseTypography;