import React, { ForwardedRef } from "react";

export interface HeadingProps extends React.ComponentProps<'h2'> { };

export const Heading = React.forwardRef(({ className, ...props }: HeadingProps, ref: ForwardedRef<HTMLHeadingElement>) => {
  const classes = [
    'text-2xl font-bold tracking-wide',
    className
  ].filter(Boolean).join(' ')

  return <h2 ref={ref} className={classes} {...props} />
})

Heading.displayName = 'Heading';
