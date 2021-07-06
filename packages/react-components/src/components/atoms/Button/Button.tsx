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
  ${css(theme => ({
    position: 'relative',
    border: 0,
    borderRadius: 3,
    boxShadow: 1,
    color: 'text.button',
    fontWeight: 'ultraBold',
    padding: 3,
    cursor: 'pointer',
    textShadow: '1px 1px 6px rgb(0 0 0 / 20%)',
    transition: 'all .3s ease',
    ':hover': {
      boxShadow: 3
    },
    ':disabled, :disabled:hover': {
      color: 'text.secondary',
      background: theme.colors.gradient.disabled,
      cursor: 'not-allowed',
      boxShadow: 1
    }
  }))}
  ${({ theme }) =>
    variant({
      scale: 'variants.button',
      variants: {
        primary: {
          background: theme.colors.gradient.primary
        },
        outline: {
          backgroundColor: 'transparent',
          boxShadow: 'inset 0 0 0 3px;',
          color: 'primary.main',
          ':hover': {
            color: 'text.button'
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
            color: 'primary.main',
            zIndex: -1
          },
          ':hover::before': {
            boxShadow: 'inset 0 0 0 30px',
            borderRadius: 3
          }
        },
        success: {
          background: theme.colors.gradient.success
        },
        warning: {
          background: theme.colors.gradient.warning
        },
        error: {
          background: theme.colors.gradient.error
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
