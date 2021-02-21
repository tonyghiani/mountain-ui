import styled from 'styled-components'

import { BaseElement, BaseElementProps } from '../../../BaseElement';

export type ButtonProps = BaseElementProps & {
}

/**
 * Primary UI component for user interaction
 */
const Button = styled(BaseElement) <ButtonProps>``

Button.defaultProps = {
  as: 'button',
  color: 'text.primary',
  backgroundColor: 'background.positive',
  padding: 3,
  borderRadius: 3,
  border: 0,
  boxShadow: 3
}

Button.displayName = 'Button'

export default Button;