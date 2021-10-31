import styled from 'styled-components';

import { Text, TextProps } from '../Typography';

export type CodeProps = TextProps;
/**
 * Component used to render a code block
 */
const Code = styled(Text)<CodeProps>``;

Code.defaultProps = {
  as: 'code',
  backgroundColor: 'background.code',
  borderRadius: 2,
  fontWeight: 'bold',
  color: 'text.light',
  display: 'inline',
  paddingX: 2,
  paddingY: 1
};

Code.displayName = 'Code';

export default Code;
