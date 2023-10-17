import React from "react";

export interface CodeProps extends React.ComponentProps<'code'> { };

export const Code = ({ className, ...props }: CodeProps) => {
  const classes = [
    'bg-blue-950 text-bold text-secondaryBody text-light inline-block px-1 rounded',
    className
  ].filter(Boolean).join(' ')

  return <code className={classes} {...props} />
}

Code.displayName = 'Code';
