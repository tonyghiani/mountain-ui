import styled from 'styled-components'
import { background, color } from 'styled-system'

export interface ButtonProps {
}


/**
 * Primary UI component for user interaction
 */
const Button = styled.button`
  line-height: 1.5rem;
  background-color: blue;
  color: snow;
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 0 18px 6px rgb(220,220,220);
  outline: none;
  ${color}
  ${background}
`

Button.displayName = 'Button'

export default Button;