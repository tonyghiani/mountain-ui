import styled from 'styled-components';

import { Text, TextProps } from '../Text';

const Paragraph = styled(Text)<TextProps>``;

Paragraph.defaultProps = { as: 'p' };
Paragraph.displayName = 'Paragraph';

export default Paragraph;
