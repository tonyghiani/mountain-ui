import { createMntComponent } from '../../../internals/create_mnt_component';

type ButtonColor = 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'disabled' | 'inherit' | 'current'
type ButtonVariant = 'shade' | 'solid' | 'outline' | 'link' | 'text'

export interface ButtonProps {
  /* The color to apply for the button content */
  color?: ButtonColor
  /* The variant to use for the button */
  variant?: ButtonVariant
}


const baseClass = 'relative border-0 rounded-lg font-medium text-body py-2 px-3 cursor-pointer transition ease duration-300 disabled:text-gray-700 disabled:bg-gray-100 disabled:cursor-not-allowed';
const variants: Record<ButtonVariant, string> = {
  shade: 'bg-opacity-20 hover:bg-opacity-30',
  solid: 'bg-current',
  outline: 'bg-transparent',
  link: 'bg-transparent',
  text: 'bg-transparent',
}
const colors: Record<ButtonColor, string> = {
  primary: 'text-blue-600 bg-blue-400',
  accent: 'text-purple-600 bg-purple-400',
  success: 'text-green-600 bg-green-400',
  warning: 'text-yellow-600 bg-yellow-300',
  danger: 'text-red-600 bg-red-400',
  disabled: 'text-gray-500 bg-gray-400',
  inherit: 'text-inherit',
  current: 'text-current',
}

const color = (col = 'primary') => colors[col]

/**
 * Primary UI component for user interaction
 */
const Button = createMntComponent<ButtonProps>('button')({
  baseClass,
  variants,
  defaultVariant: 'shade',
  classFromProps: {
    color
  },
})

Button.displayName = 'Button';

export default Button;
