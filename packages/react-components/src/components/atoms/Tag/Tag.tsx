import React from 'react';

import { useTheme } from '../../../hooks';
import { Box, BoxProps, Text } from '..';

export type TagProps = BoxProps & {
  /* Tag text children */
  children: React.ReactNode;
};

/**
 * The `Tag` component is used to render small chips of information
 */
function Tag({ children, ...props }: TagProps) {
  const theme = useTheme();
  return (
    <Box
      display='inline-block'
      px={3}
      py={2}
      borderRadius={6}
      background={`linear-gradient(15deg, ${theme.colors.blue[500]}, ${theme.colors.blue[300]})`}
      {...props}
    >
      <Text strong color='white'>
        {children}
      </Text>
    </Box>
  );
}

Tag.displayName = 'Tag';

export default Tag;
