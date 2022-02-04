import css from '@styled-system/css';
import styled from 'styled-components';
import { variant } from 'styled-system';

import { BaseElementProps, styleProps } from '../../BaseElement';

export type ButtonProps = BaseElementProps & {
  /** Button variant */
  variant?: 'primary' | 'outline' | 'success' | 'warning' | 'error';
};

/**
 * Primary UI component for user interaction
 */
const Button = styled.button<ButtonProps>`
  ${css({
    position: 'relative',
    border: 0,
    borderRadius: 3,
    boxShadow: 1,
    color: 'white',
    fontWeight: 'semiBold',
    fontSize: 2,
    padding: 3,
    cursor: 'pointer',
    textShadow: '1px 1px 6px rgb(0 0 0 / 20%)',
    transition: 'all .3s ease',
    ':hover': {
      boxShadow: 2
    },
    ':disabled, :disabled:hover': {
      color: 'gray.700',
      backgroundColor: 'gray.100',
      cursor: 'not-allowed',
      boxShadow: 1
    }
  })}
  ${variant({
    scale: 'variants.button',
    variants: {
      primary: {
        backgroundColor: 'blue.400'
      },
      outline: {
        backgroundColor: 'transparent',
        boxShadow: 'inset 0 0 0 3px;',
        color: 'blue.400',
        ':hover': {
          color: 'white'
        },
        '::before, :hover::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          transitionDuration: '0.25s',
          boxShadow: 'inset 0 0 0 3px',
          borderRadius: 3,
          color: 'blue.400',
          zIndex: -1
        },
        ':hover::before': {
          boxShadow: 'inset 0 0 0 30px',
          borderRadius: 3
        }
      },
      success: {
        backgroundColor: 'green.400'
      },
      warning: {
        backgroundColor: 'yellow.400'
      },
      error: {
        backgroundColor: 'red.400'
      }
    }
  })}
  ${styleProps}
`;

Button.defaultProps = {
  variant: 'primary'
};

Button.displayName = 'Button';

export default Button;
