import React, { ForwardedRef } from 'react';
import mnt from 'react-mnt';

const CardWrapper = mnt('div')`
  w-fit flex flex-col rounded-xl border border-solid border-sky-600 overflow-hidden
`

export interface CardProps extends React.ComponentProps<typeof CardWrapper> {
  heading?: React.ReactNode;
}

export const Card = React.forwardRef(({ children, heading = null, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>) => {

  return (
    <CardWrapper ref={ref} {...props}>
      {heading && <div className='flex items-center justify-center bg-sky-600 p-2'>{heading}</div>}
      {children}
    </CardWrapper>
  );
});

Card.displayName = 'Card';
