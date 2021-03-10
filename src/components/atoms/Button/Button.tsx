import css from '@styled-system/css';
import styled from 'styled-components'
import { variant } from 'styled-system';

import { BaseElement, BaseElementProps } from '../../BaseElement';

export type ButtonProps = BaseElementProps & {
  /**
   * Button variant
   */
  variant: 'primary' | 'outline' | 'success' | 'error'
}

/**
 * Primary UI component for user interaction
 */
const Button = styled(BaseElement)<ButtonProps>(
  css({
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
  }),
  variant({
    scale: 'variants.button',
    variants: {
      success: {
        background: 'linear-gradient(30deg, rgba(38,228,95,1) 0%, rgba(118,241,156,1) 60%, rgba(171,246,193,1) 100%)',
      },
      error: {
        background: 'linear-gradient(30deg, rgba(247,77,77,1) 0%, rgba(251,97,97,1) 60%, rgba(255,124,124,1) 100%)',
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
  })
)

Button.defaultProps = {
  variant: 'primary',
  as: 'button'
}

Button.displayName = 'Button'

export default Button;