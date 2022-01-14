import React from 'react';
import styled from 'styled-components';
import { typography } from 'styled-system';

import { BaseElement, BaseElementProps } from '../../BaseElement';
import Box from '../Layout/Box';
import { Paragraph, Text } from '..';

const STATUS_COLOR = {
  default: 'gray',
  success: 'green',
  warning: 'yellow',
  error: 'red'
};

const SIZES = {
  XS: {
    height: 36,
    fontSize: 0,
    p: 3
  },
  S: {
    height: 42,
    fontSize: 1,
    p: 4
  },
  M: {
    height: 48,
    fontSize: 2,
    p: 5
  },
  L: {
    height: 54,
    fontSize: 4,
    p: 5
  },
  XL: {
    height: 60,
    fontSize: 5,
    p: 6
  }
};

export type InputProps = BaseElementProps & {
  /* Input container children */
  children?: React.ReactNode;
  /* Caption text for the input */
  caption?: string;
  /* Label text for the input */
  label?: string;
  /* Tag size */
  size?: keyof typeof SIZES;
  /* Tag status */
  status?: keyof typeof STATUS_COLOR;
};

const StyledInput = styled(BaseElement).attrs({ as: 'input' })`
  ${typography}
  border: 0;
  background-color: transparent;
`;

const InputWrapper = styled(Box)`
  width: 100%;
  border-radius: ${p => p.theme.radii[3]};
  background-color: var(--bgc-input);
  box-shadow: inset 0 0 0 2px var(--c-input);
  height: min-content;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  transition: all 0.2s;

  &:focus-within {
    box-shadow: inset 0 0 0 3px var(--c-input);
  }
`;

const InputContainer = styled(Box)`
  --c-input: ${p => p.theme.colors[p.color][600]};
  --bgc-input: ${p => p.theme.colors[p.color][50]};
  position: relative;

  &:focus-within {
    --c-input: ${p => p.theme.colors.blue[500]};
    --bgc-input: ${p => p.theme.colors.blue[50]};
  }
`;

/**
 * The `Input` component is used to collect information from the users
 */
function Input({ status = 'default', size = 'M', label, caption, children, ...props }: InputProps) {
  const { height, fontSize, p } = SIZES[size];
  const inputColor = STATUS_COLOR[status];

  return (
    <InputContainer color={inputColor}>
      {label && (
        <Text as='label' color='var(--c-input)' mb={2}>
          {label}
        </Text>
      )}
      <InputWrapper px={p} py={p - 1} height={height}>
        {children}
        <StyledInput
          width={1}
          ml={children ? p : 0}
          fontSize={fontSize}
          fontWeight='semiBold'
          {...props}
        />
      </InputWrapper>
      {caption && (
        <Paragraph fontSize='caption' color='var(--c-input)'>
          {caption}
        </Paragraph>
      )}
    </InputContainer>
  );
}

Input.displayName = 'Input';

export default Input;
