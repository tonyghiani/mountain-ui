import styled from 'styled-components';

import { styleProps } from '../../BaseElement';
import BaseTypography, { BaseTypographyProps } from '../BaseTypography';

export type HeadingProps = BaseTypographyProps;

const Heading = styled(BaseTypography)<HeadingProps>`
  letter-spacing: 0.5px;
  ${styleProps}
`;

Heading.displayName = 'Heading';
Heading.defaultProps = {
  as: 'h1'
};

export default Heading;
