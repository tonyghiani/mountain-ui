import styled from 'styled-components';

import Box, { BoxProps } from '../Box';

export type ContainerProps = BoxProps;

/**
 * Container component
 */
const Container = styled(Box)<ContainerProps>``;

Container.defaultProps = {
  maxWidth: 'min(100%, 1152px)',
  px: 3,
  mx: 'auto'
};

Container.displayName = 'Container';

export default Container;
