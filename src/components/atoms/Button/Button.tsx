import css from '@styled-system/css';
import styled from 'styled-components'
import { variant } from 'styled-system';

import { BaseElementProps, styleProps } from '../../BaseElement';

export type ButtonProps = BaseElementProps & {
  /**
   * Button variant
   */
  variant: 'primary' | 'outline' | 'success' | 'warning' | 'error'
}

/**
 * Primary UI component for user interaction
 */
const Button = styled.button<ButtonProps>`
  ${css({
  color: 'text.light',
  fontWeight: 'ultraBold',
  textShadow: '1px 1px 6px rgb(0 0 0 / 20%)',
  padding: 3,
  borderRadius: 3,
  border: 0,
  boxShadow: 1,
  transition: 'box-shadow .3s ease',
  ':hover': {
    boxShadow: 2,
  }
})}
  ${({ theme }) => variant({
  scale: 'variants.button',
  variants: {
    primary: {
      background: 'linear-gradient(30deg, rgba(38,228,95,1) 0%, rgba(171,246,193,1) 100%)',
    },
    success: {
      background: `linear-gradient(30deg, ${theme.colors.feeling.success.normal} 0%, ${theme.colors.feeling.success.light} 100%)`,
      ':hover': {
        background: `linear-gradient(30deg, ${theme.colors.feeling.success.dark} 0%, ${theme.colors.feeling.success.light} 100%)`,
      }
    },
    warning: {
      background: `linear-gradient(30deg, ${theme.colors.feeling.warning.normal} 0%, ${theme.colors.feeling.warning.light} 100%)`,
      ':hover': {
        background: `linear-gradient(30deg, ${theme.colors.feeling.warning.dark} 0%, ${theme.colors.feeling.warning.light} 100%)`,
      }
    },
    error: {
      background: `linear-gradient(30deg, ${theme.colors.feeling.error.normal} 0%, ${theme.colors.feeling.error.light} 100%)`,
      ':hover': {
        background: `linear-gradient(30deg, ${theme.colors.feeling.error.dark} 0%, ${theme.colors.feeling.error.light} 100%)`,
      }
    },
    outline: {
      color: 'text.primary',
      backgroundColor: 'transparent',
      padding: 3,
      border: '2px solid',
      borderColor: 'text.primary',
      borderRadius: 3,
      boxShadow: 0
    },
  }
})}
  ${styleProps}
`

Button.defaultProps = {
  variant: 'primary'
}

Button.displayName = 'Button'

export default Button;