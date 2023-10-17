import React from "react";

export interface ContainerProps extends React.ComponentProps<'div'> { };

export const Container = ({ className, ...props }: ContainerProps) => {
  const classes = [
    'mx-auto px-4 max-w-screen-lg',
    className
  ].filter(Boolean).join(' ')

  return <div className={classes} {...props} />
}

Container.displayName = 'Container';
