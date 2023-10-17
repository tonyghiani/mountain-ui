import React, { ForwardedRef } from 'react';

export interface CardProps extends React.ComponentProps<'div'> {
  heading?: React.ReactNode;
}

export const Card = React.forwardRef(({ className, children, heading = null, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>) => {
  const classes = [
    'w-fit flex flex-col rounded-xl border border-solid border-sky-600 overflow-hidden',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={classes} {...props}>
      {heading && <div className='flex items-center justify-center bg-sky-600 p-2'>{heading}</div>}
      {children}
    </div>
  );
});

Card.displayName = 'Card';
