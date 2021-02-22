import React from 'react';
import styled from 'styled-components';
import { compose, textStyle, typography } from 'styled-system'

import { BaseElement } from '../../../BaseElement';

const textStyles = compose(typography, textStyle)

export interface TypographyProps {
  /**
   * TODO: add prop description
   */
  firstProp: boolean;
}

/**
 * TODO: add component description headline
 */
export const BaseTypography = styled(BaseElement)(textStyles)

BaseTypography.displayName = 'BaseTypography';

export default BaseTypography;