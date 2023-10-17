import React from "react";

export interface ButtonProps extends React.ComponentProps<'button'> { };

export const Button = ({ className, ...props }: ButtonProps) => {
  const classes = [
    'relative inline-block w-fit border-0 rounded-lg font-medium text-body py-2 px-4 cursor-pointer transition ease duration-150 disabled:text-gray-700 disabled:bg-gray-100 disabled:cursor-not-allowed',
    'bg-opacity-20 hover:bg-opacity-30 text-blue-700 bg-blue-600 from-blue-600 to-blue-400',
    className
  ].filter(Boolean).join(' ')

  return <button className={classes} {...props} />
}

Button.displayName = 'Button';
