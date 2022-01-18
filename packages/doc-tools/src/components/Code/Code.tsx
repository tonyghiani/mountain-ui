import styled from 'styled-components';

import { Text, TextProps } from '../Typography';

export type CodeProps = TextProps;
/**
 * Component used to render a code block
 */
const Code = styled(Text)<CodeProps>``;

Code.defaultProps = {
  as: 'code',
  backgroundColor: 'hsl(206, 64%, 15%)',
  borderRadius: 16,
  fontWeight: 'bold',
  fontSize: 16,
  color: 'white',
  display: 'inline-block',
  paddingX: 8
};

Code.displayName = 'Code';

export default Code;
