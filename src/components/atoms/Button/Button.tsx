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
  ${css(theme => ({
  border: 0,
  borderRadius: 3,
  boxShadow: 1,
  color: 'text.light',
  fontWeight: 'ultraBold',
  padding: 3,
  textShadow: '1px 1px 6px rgb(0 0 0 / 20%)',
  transition: 'all .3s ease',
  ':hover': {
    boxShadow: 2,
  },
  ':disabled, :disabled:hover': {
    color: 'text.secondary',
    background: `linear-gradient(30deg, ${theme.colors.text.caption.concat('66')}, ${theme.colors.text.secondary.concat('33')})`,
    cursor: 'not-allowed',
  }
}))}
  ${({ theme }) => variant({
  scale: 'variants.button',
  variants: {
    primary: {
      background: `linear-gradient(30deg, ${theme.colors.accent.primary.normal}, ${theme.colors.accent.primary.light})`,
      ':hover': {
        background: `linear-gradient(30deg, ${theme.colors.accent.primary.dark}, ${theme.colors.accent.primary.light})`,
      }
    },
    outline: {
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 3px;',
      color: 'accent.primary.normal',
      ':hover': {
        backgroundColor: theme.colors.accent.primary.normal.concat('26'),
        boxShadow: 'inset 0 0 0 3px;'
      }
    },
    success: {
      background: `linear-gradient(30deg, ${theme.colors.feeling.success.normal}, ${theme.colors.feeling.success.light})`,
      ':hover': {
        background: `linear-gradient(30deg, ${theme.colors.feeling.success.dark}, ${theme.colors.feeling.success.light})`,
      }
    },
    warning: {
      background: `linear-gradient(30deg, ${theme.colors.feeling.warning.normal}, ${theme.colors.feeling.warning.light})`,
      ':hover': {
        background: `linear-gradient(30deg, ${theme.colors.feeling.warning.dark}, ${theme.colors.feeling.warning.light})`,
      }
    },
    error: {
      background: `linear-gradient(30deg, ${theme.colors.feeling.error.normal}, ${theme.colors.feeling.error.light})`,
      ':hover': {
        background: `linear-gradient(30deg, ${theme.colors.feeling.error.dark}, ${theme.colors.feeling.error.light})`,
      }
    }
  }
})}
  ${styleProps}
`

Button.defaultProps = {
  variant: 'primary'
}

Button.displayName = 'Button'

export default Button;