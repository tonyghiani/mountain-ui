/* eslint-disable no-unused-vars */
import React from 'react';

import { useTheme } from '../../../hooks';
import { Box, BoxProps, Text } from '..';

// type Size = 'xs' | 's' | 'm' | 'l' | 'xl'

enum Sizes {
  XS = 0,
  S = 1,
  M = 2,
  L = 3,
  XL = 4
}

export type TagProps = BoxProps & {
  /* Tag text children */
  children: React.ReactNode;
  /* Tag text children */
  size?: keyof typeof Sizes;
};

/**
 * The `Tag` component is used to render small chips of information
 */
function Tag({ children, size = 'M', ...props }: TagProps) {
  const theme = useTheme();

  const itemSize = Sizes[size];

  return (
    <Box
      display='inline-block'
      height='min-content'
      px={itemSize + 2}
      py={Math.min(itemSize, 3)}
      borderRadius={7}
      background={`linear-gradient(15deg, ${theme.colors.blue[500]}, ${theme.colors.blue[200]})`}
      {...props}
    >
      <Text strong color='white' fontSize={itemSize}>
        {children}
      </Text>
    </Box>
  );
}

Tag.displayName = 'Tag';

export default Tag;
