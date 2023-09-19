import styled from 'styled-components';

import { Text, TextProps } from '../Typography';

export type CodeProps = TextProps;
/**
 * Component used to render a code block
 */
const Code = styled(Text)<CodeProps>``;

Code.defaultProps = {
  as: 'code',
  backgroundColor: 'blue.900',
  borderRadius: 3,
  fontWeight: 'bold',
  fontSize: 'secondaryBody',
  color: 'white',
  display: 'inline-block',
  paddingX: 2
};

Code.displayName = 'Code';

export default Code;
