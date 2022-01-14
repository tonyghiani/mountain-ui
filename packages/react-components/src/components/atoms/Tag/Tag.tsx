/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { Box, BoxProps, Text } from '..';

const STATUS_COLOR = {
  success: 'green.300',
  warning: 'yellow.300',
  error: 'red.300'
};

const SIZES = {
  XS: {
    height: 30,
    fontSize: 0,
    statusSize: 10,
    px: 3,
    py: 1
  },
  S: {
    height: 36,
    fontSize: 1,
    statusSize: 12,
    px: 4,
    py: 2
  },
  M: {
    height: 42,
    fontSize: 2,
    statusSize: 14,
    px: 4,
    py: 2
  },
  L: {
    height: 48,
    fontSize: 4,
    statusSize: 16,
    px: 4,
    py: 2
  },
  XL: {
    height: 60,
    fontSize: 5,
    statusSize: 18,
    px: 5,
    py: 3
  }
};

const TagContainer = styled(Box)`
  cursor: ${p => (p.onClick ? 'pointer' : 'default')};
  background: linear-gradient(
    15deg,
    ${p => p.theme.colors.blue[500]},
    ${p => p.theme.colors.blue[200]}
  );
  transition: all 0.3s;

  &:hover {
    transform: scale(1.03);
    background: linear-gradient(
      15deg,
      ${p => p.theme.colors.blue[500]},
      ${p => p.theme.colors.blue[300]}
    );
  }
`;

export type TagProps = BoxProps & {
  /* Tag text children */
  children: React.ReactNode;
  /* Tag size */
  size?: keyof typeof SIZES;
  /* Tag status */
  status?: keyof typeof STATUS_COLOR;
};

type TagStatusProps = {
  /* Tag status size */
  size: number;
  /* Tag status */
  status: keyof typeof STATUS_COLOR;
};

/**
 * The `Tag` component is used to render small chips of information
 */
function Tag({ children, size = 'M', status, ...props }: TagProps) {
  const { height, fontSize, px, py, statusSize } = SIZES[size];

  return (
    <TagContainer
      display='inline-flex'
      alignItems='center'
      position='relative'
      height={height}
      borderRadius={7}
      px={px}
      py={py}
      {...props}
    >
      <Text strong color='white' fontSize={fontSize}>
        {children}
      </Text>
      {!!status && <TagStatus status={status} size={statusSize} />}
    </TagContainer>
  );
}

function TagStatus({ status, size }: TagStatusProps) {
  return (
    <Box
      borderRadius={8}
      bg={STATUS_COLOR[status]}
      width={size}
      height={size}
      position='absolute'
      top={-1}
      right={-1}
      borderWidth={2}
      borderStyle='solid'
      borderColor='light'
    />
  );
}

Tag.displayName = 'Tag';

export default Tag;
