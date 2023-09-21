import { mnt } from '../../../internals/create_mnt_component';

const baseClass = 'relative border-0 rounded-lg font-medium text-body py-2 px-3 cursor-pointer transition ease duration-300 disabled:text-gray-700 disabled:bg-gray-100 disabled:cursor-not-allowed';
export const BUTTON_COLORS = {
  primary: 'text-blue-600 bg-blue-400',
  accent: 'text-purple-600 bg-purple-400',
  success: 'text-green-600 bg-green-300',
  warning: 'text-yellow-600 bg-yellow-300',
  danger: 'text-red-600 bg-red-300',
  disabled: 'text-gray-500 bg-gray-300',
  inherit: 'text-inherit',
  current: 'text-current',
}
export const BUTTON_VARIANTS = {
  shade: 'bg-opacity-20 hover:bg-opacity-30',
  solid: '!text-light',
  outline: 'bg-opacity-10 hover:bg-opacity-30 shadow-outline-button',
  gradient: 'bg-transparent',
  link: '!bg-transparent hover:underline underline-offset-4',
  text: 'bg-transparent',
}

type ButtonColor = keyof typeof BUTTON_COLORS
type ButtonVariant = keyof typeof BUTTON_VARIANTS

export interface ButtonProps {
  /* The color to apply for the button content */
  color?: ButtonColor
  /* The variant to use for the button */
  variant?: ButtonVariant
}

/**
 * Primary UI component for user interaction
 */
const Button = mnt<ButtonProps>('button')`
  ${baseClass}
  ${({ color = 'primary' }) => BUTTON_COLORS[color]}
  ${({ variant = 'shade' }) => BUTTON_VARIANTS[variant]}
`

Button.displayName = 'Button';

export default Button;
