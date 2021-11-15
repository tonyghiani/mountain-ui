/* eslint-disable no-unused-vars */
import React from 'react';

import { useTheme } from '../../../hooks';
import { Box, BoxProps, Text } from '..';

const SIZES = {
  XS: {
    fontSize: 0,
    px: 3,
    py: 1
  },
  S: {
    fontSize: 1,
    px: 4,
    py: 2
  },
  M: {
    fontSize: 2,
    px: 4,
    py: 2
  },
  L: {
    fontSize: 4,
    px: 4,
    py: 2
  },
  XL: {
    fontSize: 5,
    px: 5,
    py: 3
  }
};

export type TagProps = BoxProps & {
  /* Tag text children */
  children: React.ReactNode;
  /* Tag text children */
  size?: keyof typeof SIZES;
};

/**
 * The `Tag` component is used to render small chips of information
 */
function Tag({ children, size = 'M', ...props }: TagProps) {
  const theme = useTheme();

  const { fontSize, px, py } = SIZES[size];

  return (
    <Box
      display='inline-flex'
      height='min-content'
      borderRadius={7}
      px={px}
      py={py}
      background={`linear-gradient(15deg, ${theme.colors.blue[500]}, ${theme.colors.blue[200]})`}
      {...props}
    >
      <Text strong color='white' fontSize={fontSize}>
        {children}
      </Text>
    </Box>
  );
}

Tag.displayName = 'Tag';

export default Tag;
