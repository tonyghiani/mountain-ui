import { mnt } from '../../../internals/mnt';

export const BUTTON_BASE_CLASS = 'relative inline-block w-fit border-0 rounded-lg font-medium text-body py-2 px-4 cursor-pointer transition ease duration-150 disabled:text-gray-700 disabled:bg-gray-100 disabled:cursor-not-allowed';
export const BUTTON_COLORS = {
  primary: 'text-blue-700 bg-blue-600 from-blue-600 to-blue-400',
  accent: 'text-purple-700 bg-purple-600 from-purple-600 to-purple-400',
  success: 'text-green-600 bg-green-600 from-green-600 to-green-400',
  warning: 'text-yellow-600 bg-yellow-500 from-yellow-600 to-yellow-400',
  danger: 'text-red-700 bg-red-600 from-red-600 to-red-400',
  disabled: 'text-gray-600 bg-gray-500 from-gray-600 to-gray-400'
}
export const BUTTON_VARIANTS = {
  shade: 'bg-opacity-20 hover:bg-opacity-30',
  solid: '!text-light',
  outline: 'bg-opacity-10 hover:bg-opacity-30 shadow-outline-button',
  gradient: 'bg-gradient-to-br hover:bg-gradient-to-r !text-light',
  link: '!bg-transparent hover:underline underline-offset-4',
  text: '!bg-transparent hover:scale-105',
}

export type ButtonColor = keyof typeof BUTTON_COLORS
export type ButtonVariant = keyof typeof BUTTON_VARIANTS

export interface ButtonProps {
  /**
   * The color to apply for the button content
   */
  color?: ButtonColor
  /**
   * The button status
   */
  disabled?: boolean
  /**
   * The variant to use for the button
   */
  variant?: ButtonVariant
}

/**
 * The `Button` component is the primary element for any user interaction.
 */
export const Button = mnt<ButtonProps>('button')`
  ${BUTTON_BASE_CLASS}
  ${({ color = 'primary' }) => BUTTON_COLORS[color]}
  ${({ variant = 'shade' }) => BUTTON_VARIANTS[variant]}
`

Button.displayName = 'Button';
