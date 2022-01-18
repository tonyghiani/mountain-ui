import React from 'react';
import styled from 'styled-components';
import { typography } from 'styled-system';

import { BaseElement, BaseElementProps } from '../BaseElement';
import Box from '../Layout/Box';

export type InputProps = BaseElementProps & {
  /* Input container children */
  children?: React.ReactNode;
  /* Caption text for the input */
  caption?: string;
  /* Label text for the input */
  label?: string;
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
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  transition: all 0.2s;

  &:focus-within {
    box-shadow: inset 0 0 0 3px var(--c-input);
  }
`;

/**
 * The `Input` component is used to collect information from the users
 */
function Input({ label, caption, children, ...props }: InputProps) {
  return (
    <InputWrapper px={4} height={42}>
      <StyledInput width={1} {...props} />
    </InputWrapper>
  );
}

Input.displayName = 'Input';

export default Input;
