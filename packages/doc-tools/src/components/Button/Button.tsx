import styled from 'styled-components';

import { BaseElementProps, styleProps } from '../BaseElement';

export type ButtonProps = BaseElementProps;

/**
 * Primary UI component for user interaction
 */
const Button = styled.button<ButtonProps>`
  position: relative;
  background-color: hsl(206, 84%, 60%);
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  padding: 8px;
  cursor: pointer;
  text-shadow: 1px 1px 6px rgb(0 0 0 / 20%);
  transition: all 0.3s;

  &:disabled,
  &:disabled:hover {
    color: gray;
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
  ${styleProps}
`;

Button.displayName = 'Button';

export default Button;
