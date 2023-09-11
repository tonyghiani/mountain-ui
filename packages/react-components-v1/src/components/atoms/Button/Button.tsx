import { createMntComponent } from '../../../internals/create_mnt_component';

type ButtonVariant = 'primary' | 'outline' | 'success' | 'warning' | 'error'

export interface ButtonProps { }


const baseClass = 'relative border-0 rounded-lg shadow text-light font-medium text-body p-2 cursor-pointer drop-shadow-md transition ease duration-300 hover:shadow-md disabled:text-gray-700 disabled:bg-gray-100 disabled:cursor-not-allowed';
const variants: Record<ButtonVariant, string> = {
  primary: 'bg-blue-400',
  outline: '',
  success: 'bg-green-400',
  warning: 'bg-yellow-400',
  error: 'bg-red-400',
}


/**
 * Primary UI component for user interaction
 */
const Button = createMntComponent<ButtonProps>('button')({
  baseClass,
  variants,
  defaultVariant: 'primary',
})

Button.displayName = 'Button';

export default Button;
